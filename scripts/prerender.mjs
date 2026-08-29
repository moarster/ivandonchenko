/**
 * Bakes per-route <head> metadata into the built SPA.
 *
 * The app sets its meta tags from React, which is enough for Google but not for
 * social crawlers (Telegram, VK, LinkedIn, Facebook) or for any indexer that
 * does not execute JavaScript: they all read the raw HTML. Vite emits a single
 * `dist/index.html`, so every URL would otherwise share one English title.
 *
 * This script copies that file to `dist/<route>/index.html` for every known
 * route, replacing the SEO tags with values for that specific page, and emits
 * `sitemap.xml` and `robots.txt` alongside. nginx serves those files before
 * falling back to the SPA shell (see nginx.conf), so the crawler gets the
 * static head and the browser still gets the same bundle.
 *
 * Static page titles come from `src/seo/pages.json`, shared with the runtime
 * SEO component. Article metadata is read straight from the markdown sources.
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const BLOG_DIR = join(ROOT, "src/blog");
const SITE_URL = "https://ivandonchenko.ru";
const DEFAULT_IMAGE = "/images/og-image.jpg";
const AUTHOR = "Ivan Donchenko";

const SITE_NAME = { ru: "Иван Донченко", en: "Ivan Donchenko" };
const OG_LOCALE = { ru: "ru_RU", en: "en_US" };
const META_DESCRIPTION_LIMIT = 160;

/** Keeps meta descriptions inside the length search engines actually show. */
function truncate(text, limit) {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const boundary = cut.lastIndexOf(" ");
  const trimmed = boundary > limit * 0.6 ? cut.slice(0, boundary) : cut;
  return `${trimmed.replace(/[,;:.\s—-]+$/, "")}…`;
}

const pages = JSON.parse(
  readFileSync(join(ROOT, "src/seo/pages.json"), "utf8"),
);

// ---------------------------------------------------------------- frontmatter

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function stripQuotes(value) {
  const quoted =
    value.length >= 2 &&
    ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'")));
  return quoted ? value.slice(1, -1) : value;
}

function parseValue(value) {
  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map((item) => stripQuotes(item.trim()))
      .filter(Boolean);
  }
  return stripQuotes(value);
}

function parseFrontmatter(raw) {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) return { data: {}, content: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    if (key) data[key] = parseValue(line.slice(separator + 1).trim());
  }
  return { data, content: raw.slice(match[0].length) };
}

// ------------------------------------------------------------------- articles

/**
 * Vite renames emitted assets to `<name>-<hash>.<ext>`, so an article's
 * `img/foo.webp` has to be matched back to its built filename by base name.
 */
function buildAssetIndex() {
  const index = {};
  let files = [];
  try {
    files = readdirSync(join(DIST, "assets"));
  } catch {
    return index;
  }
  for (const file of files) {
    // The hash itself may contain hyphens (`i-Lnr6ac-k.webp`), so the name has
    // to be matched lazily against a fixed-width hash rather than greedily.
    const match = file.match(/^(.+?)-[A-Za-z0-9_-]{8}(\.[a-z0-9]+)$/);
    if (match) index[match[1] + match[2]] = `/assets/${file}`;
  }
  return index;
}

const assetIndex = buildAssetIndex();

function resolveAsset(url) {
  if (!url) return "";
  if (/^https?:\/\//.test(url) || url.startsWith("/")) return url;
  return assetIndex[url.split("/").pop()] ?? "";
}

function readArticles() {
  const bySlug = {};
  let slugs = [];
  try {
    slugs = readdirSync(BLOG_DIR, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .map((entry) => entry.name);
  } catch {
    return bySlug;
  }

  for (const slug of slugs) {
    const variants = {};
    // Mirrors src/utils/blog.ts: a bare index.md is the Russian default and an
    // explicit index.ru.md wins over it.
    for (const [language, file] of [
      ["en", "index.en.md"],
      ["ru", "index.md"],
      ["ru", "index.ru.md"],
    ]) {
      let raw;
      try {
        raw = readFileSync(join(BLOG_DIR, slug, file), "utf8");
      } catch {
        continue;
      }
      const { data, content } = parseFrontmatter(raw);
      if (data.draft === "true") continue;

      const title =
        data.title || content.match(/^#\s+(.+?)\s*$/m)?.[1]?.trim() || slug;
      const bodyImage = content.match(/!\[[^\]]*\]\(([^)\s]+)/)?.[1] ?? "";

      const description = data.description || "";

      variants[language] = {
        slug,
        title,
        description,
        seoDescription:
          data.seoDescription || truncate(description, META_DESCRIPTION_LIMIT),
        date: data.date || "",
        updated: data.updated || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        canonical: data.canonical || "",
        image: resolveAsset(data.image || bodyImage),
      };
    }
    if (Object.keys(variants).length > 0) bySlug[slug] = variants;
  }
  return bySlug;
}

// ---------------------------------------------------------------------- head

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const absolute = (path) =>
  /^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`;

/** Tags this script owns; anything else in the built head is kept as-is. */
const OWNED_TAG_RE =
  /\s*(<title>[\s\S]*?<\/title>|<meta\s+(?:name="(?:description|robots|twitter:[^"]*)"|property="(?:og|article):[^"]*")[^>]*>|<link\s+rel="(?:canonical|alternate)"[^>]*>)/g;

function buildHead(meta) {
  const url = absolute(meta.path);
  const image = absolute(meta.image || DEFAULT_IMAGE);
  const tags = [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}" />`,
    `<link rel="canonical" href="${escapeAttr(meta.canonical || url)}" />`,
    `<link rel="alternate" hreflang="ru" href="${escapeAttr(absolute(meta.ruPath))}" />`,
    `<link rel="alternate" hreflang="en" href="${escapeAttr(absolute(meta.enPath))}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeAttr(absolute(meta.ruPath))}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME[meta.language])}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[meta.language]}" />`,
    `<meta property="og:locale:alternate" content="${OG_LOCALE[meta.language === "ru" ? "en" : "ru"]}" />`,
    `<meta property="og:url" content="${escapeAttr(url)}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.ogTitle ?? meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:image" content="${escapeAttr(image)}" />`,
    `<meta property="og:image:alt" content="${escapeAttr(meta.ogTitle ?? meta.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.ogTitle ?? meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(image)}" />`,
  ];

  if (!meta.image) {
    tags.push(
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
    );
  }

  if (meta.type === "article") {
    tags.push(`<meta property="article:author" content="${AUTHOR}" />`);
    if (meta.date) {
      tags.push(
        `<meta property="article:published_time" content="${escapeAttr(meta.date)}" />`,
      );
    }
    if (meta.updated || meta.date) {
      tags.push(
        `<meta property="article:modified_time" content="${escapeAttr(meta.updated || meta.date)}" />`,
      );
    }
    for (const tag of meta.tags ?? []) {
      tags.push(`<meta property="article:tag" content="${escapeAttr(tag)}" />`);
    }
  }

  if (meta.jsonLd) {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c")}</script>`,
    );
  }

  return tags.map((tag) => `    ${tag}`).join("\n");
}

// ------------------------------------------------------------------- json-ld

function personGraph(language) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: AUTHOR,
        inLanguage: language,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: AUTHOR,
        url: SITE_URL,
        image: `${SITE_URL}/images/face.jpg`,
        jobTitle: "Head of Development",
        email: "mailto:ivan@moarse.ru",
        knowsLanguage: ["ru", "en", "fr"],
        sameAs: [
          "https://linkedin.com/in/ivandonchenko",
          "https://github.com/moarster",
          "https://habr.com/ru/users/IvanDonchenko/",
          "https://career.habr.com/moares",
          "https://t.me/moarse",
        ],
      },
    ],
  };
}

function blogGraph(language, articles) {
  const prefix = language === "ru" ? "" : "/en";
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}${prefix}/blog#blog`,
    url: `${SITE_URL}${prefix}/blog`,
    inLanguage: language,
    author: { "@id": `${SITE_URL}/#person` },
    blogPost: Object.entries(articles)
      .map(([slug, variants]) => {
        const post = variants[language] ?? variants.en ?? variants.ru;
        return post
          ? {
              "@type": "BlogPosting",
              headline: post.title,
              url: `${SITE_URL}${prefix}/blog/${slug}`,
              datePublished: post.date,
            }
          : null;
      })
      .filter(Boolean),
  };
}

function articleGraph(language, post, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: language,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    ...(post.image ? { image: absolute(post.image) } : {}),
    keywords: post.tags.join(", "),
    author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: AUTHOR },
    publisher: { "@id": `${SITE_URL}/#person` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.canonical || absolute(path),
    },
  };
}

// --------------------------------------------------------------------- routes

function collectRoutes(articles) {
  const routes = [];

  for (const [path, byLanguage] of Object.entries(pages)) {
    for (const language of ["ru", "en"]) {
      const ruPath = path;
      const enPath = path === "/" ? "/en" : `/en${path}`;
      routes.push({
        path: language === "ru" ? ruPath : enPath,
        ruPath,
        enPath,
        language,
        type: "website",
        title: byLanguage[language].title,
        description: byLanguage[language].description,
        jsonLd:
          path === "/"
            ? personGraph(language)
            : path === "/blog"
              ? blogGraph(language, articles)
              : undefined,
      });
    }
  }

  for (const [slug, variants] of Object.entries(articles)) {
    for (const language of ["ru", "en"]) {
      // Matches the runtime fallback: a missing translation still renders,
      // using whichever version exists.
      const post = variants[language] ?? variants.en ?? variants.ru;
      if (!post) continue;
      const ruPath = `/blog/${slug}`;
      const enPath = `/en/blog/${slug}`;
      const path = language === "ru" ? ruPath : enPath;
      routes.push({
        path,
        ruPath,
        enPath,
        language,
        type: "article",
        title: `${post.title} — ${SITE_NAME[language]}`,
        ogTitle: post.title,
        description: post.seoDescription,
        canonical: post.canonical,
        image: post.image,
        date: post.date,
        updated: post.updated,
        tags: post.tags,
        lastmod: post.updated || post.date,
        jsonLd: articleGraph(language, post, path),
      });
    }
  }

  return routes;
}

// ---------------------------------------------------------------------- write

function writeSitemap(routes) {
  const entries = routes
    .filter((route) => route.language === "ru")
    .map((route) => {
      const lastmod = route.lastmod
        ? `\n    <lastmod>${route.lastmod}</lastmod>`
        : "";
      return [
        "  <url>",
        `    <loc>${absolute(route.ruPath)}</loc>${lastmod}`,
        `    <xhtml:link rel="alternate" hreflang="ru" href="${absolute(route.ruPath)}" />`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${absolute(route.enPath)}" />`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(route.ruPath)}" />`,
        "  </url>",
      ].join("\n");
    });

  writeFileSync(
    join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`,
  );

  writeFileSync(
    join(DIST, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  );
}

function main() {
  const shell = readFileSync(join(DIST, "index.html"), "utf8");
  const stripped = shell.replace(OWNED_TAG_RE, "");
  if (!stripped.includes("</head>")) {
    throw new Error("dist/index.html has no </head> to inject into");
  }

  const routes = collectRoutes(readArticles());

  for (const route of routes) {
    const html = stripped
      .replace(/<html\s+lang="[^"]*"/, `<html lang="${route.language}"`)
      .replace("</head>", `${buildHead(route)}\n  </head>`);
    const target =
      route.path === "/"
        ? join(DIST, "index.html")
        : join(DIST, route.path, "index.html");
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, html);
  }

  // nginx serves this for anything that does not match a real file, so the
  // status stays a true 404 while React Router still renders the styled page.
  writeFileSync(
    join(DIST, "404.html"),
    stripped.replace(
      "</head>",
      `${buildHead({
        path: "/404",
        ruPath: "/",
        enPath: "/en",
        language: "ru",
        type: "website",
        noindex: true,
        title: "Страница не найдена — Иван Донченко",
        description: "Страница не найдена.",
      })}\n  </head>`,
    ),
  );

  writeSitemap(routes);
  console.log(
    `prerender: ${routes.length} routes, sitemap.xml and robots.txt written`,
  );
}

main();
