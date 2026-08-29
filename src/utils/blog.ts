import { parseFrontmatter } from "@/utils/frontmatter";

type Language = "en" | "ru";

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  /** Optional `updated:` front-matter. Feeds dateModified and sitemap lastmod. */
  updated: string;
  /** Article lede, shown on the page and in the listing. Can run long. */
  description: string;
  /**
   * Meta description. Search engines cut off around 160 characters, and the
   * lede of an article is usually longer, so `seoDescription:` front-matter
   * overrides it; without one the lede is truncated on a word boundary.
   */
  seoDescription: string;
  tags: string[];
  readTime: number;
  /**
   * Social preview image, already resolved to its emitted asset URL. Taken from
   * the `image:` front-matter when present, otherwise the first image in the
   * body, so an article never has to opt in to get a link preview.
   */
  image: string;
  /**
   * Overrides rel=canonical for articles whose primary home is elsewhere
   * (a Habr cross-post that ranked first, for example). Empty means this site
   * is canonical.
   */
  canonical: string;
  author: string;
  draft: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

// `import.meta.glob` is a compile-time macro: the pattern and options must be
// inline literals so Vite can statically apply `?raw` and eager loading.
const enModules = import.meta.glob("/src/blog/*/index.en.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const ruModules = import.meta.glob("/src/blog/*/index.ru.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// No-suffix `index.md` is treated as the Russian default (project convention).
const defaultModules = import.meta.glob("/src/blog/*/index.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Article-local images live in the submodule next to the markdown. Importing
// them as assets lets Vite emit them with hashed URLs instead of 404ing on the
// relative path the browser would otherwise resolve against the page route.
// Only web-delivery formats are matched: the eager glob emits everything it
// matches, so listing PNG/JPEG here would ship the heavy editing originals that
// articles keep next to their exported images. Reference webp/svg in markdown.
const imageModules = import.meta.glob("/src/blog/**/*.{webp,svg,avif}", {
  import: "default",
  eager: true,
}) as Record<string, string>;

type RawEntry = Partial<Record<Language, string>>;

const rawIndex = buildRawIndex();

function buildRawIndex(): Record<string, RawEntry> {
  const index: Record<string, RawEntry> = {};
  const register = (language: Language, modules: Record<string, string>) => {
    for (const [path, raw] of Object.entries(modules)) {
      const slug = slugFromPath(path);
      const entry = index[slug] ?? {};
      entry[language] = raw;
      index[slug] = entry;
    }
  };
  register("en", enModules);
  register("ru", defaultModules);
  // Explicit `.ru.md` wins over the no-suffix default.
  register("ru", ruModules);
  return index;
}

function slugFromPath(path: string): string {
  const segments = path.split("/");
  return segments[segments.length - 2];
}

function resolveRaw(slug: string, language: Language): string | undefined {
  const entry = rawIndex[slug];
  if (!entry) return undefined;
  return entry[language] ?? entry.en ?? entry.ru;
}

const WORDS_PER_MINUTE = 200;
const DEFAULT_AUTHOR = "Ivan Donchenko";

function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function extractTitle(body: string): { title: string; body: string } | null {
  const match = body.match(/^#\s+(.+?)\s*$/m);
  if (!match) return null;
  return {
    title: match[1].trim(),
    body: body.replace(/^#\s+.+?\s*$\r?\n?/m, ""),
  };
}

function normalizePath(path: string): string {
  const stack: string[] = [];
  for (const segment of path.split("/")) {
    if (segment === "" || segment === ".") continue;
    if (segment === "..") stack.pop();
    else stack.push(segment);
  }
  return `/${stack.join("/")}`;
}

function resolveImages(slug: string, body: string): string {
  const base = `/src/blog/${slug}/`;
  return body.replace(
    /(!\[[^\]]*\]\()([^)\s]+)(\s+"[^"]*")?(\))/g,
    (full, prefix, url, title, suffix) => {
      if (
        /^(https?:)?\/\//.test(url) ||
        url.startsWith("/") ||
        url.startsWith("data:")
      ) {
        return full;
      }
      const resolved = imageModules[normalizePath(base + url)];
      return resolved ? `${prefix}${resolved}${title ?? ""}${suffix}` : full;
    },
  );
}

const IMAGE_RE = /!\[[^\]]*\]\(([^)\s]+)/;
const META_DESCRIPTION_LIMIT = 160;

function truncate(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const boundary = cut.lastIndexOf(" ");
  return `${(boundary > limit * 0.6 ? cut.slice(0, boundary) : cut).replace(/[,;:.\s—-]+$/, "")}…`;
}

/** Resolves a front-matter image path the same way body images are resolved. */
function resolveImage(slug: string, url: string): string {
  if (!url) return "";
  if (/^(https?:)?\/\//.test(url) || url.startsWith("/")) return url;
  return imageModules[normalizePath(`/src/blog/${slug}/${url}`)] ?? "";
}

/** First image of the already-resolved body, used as the default og:image. */
function firstImage(resolvedBody: string): string {
  return resolvedBody.match(IMAGE_RE)?.[1] ?? "";
}

function firstParagraph(body: string): string {
  for (const block of body.split(/\r?\n\s*\r?\n/)) {
    const text = block.trim();
    if (!text) continue;
    if (/^(#{1,6}\s|>|!\[|\||[-*+]\s|\d+\.\s|```)/.test(text)) continue;
    const collapsed = text.replace(/\s+/g, " ");
    return collapsed.length > 200
      ? `${collapsed.slice(0, 200).trimEnd()}…`
      : collapsed;
  }
  return "";
}

function toPost(slug: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);

  let body = content;
  let title = typeof data.title === "string" ? data.title : "";
  // The leading H1 is always dropped: the page renders the title itself, so
  // leaving it in the body would show it twice.
  const extracted = extractTitle(body);
  if (extracted) {
    body = extracted.body;
    if (!title) title = extracted.title;
  }
  if (!title) title = slug;

  const description =
    typeof data.description === "string" && data.description
      ? data.description
      : firstParagraph(body);

  const resolvedBody = resolveImages(slug, body);
  const declaredImage = typeof data.image === "string" ? data.image : "";

  return {
    slug,
    title,
    date: typeof data.date === "string" ? data.date : "",
    updated: typeof data.updated === "string" ? data.updated : "",
    description,
    seoDescription:
      typeof data.seoDescription === "string" && data.seoDescription
        ? data.seoDescription
        : truncate(description, META_DESCRIPTION_LIMIT),
    tags: Array.isArray(data.tags) ? data.tags : [],
    readTime: estimateReadTime(content),
    image: resolveImage(slug, declaredImage) || firstImage(resolvedBody),
    canonical: typeof data.canonical === "string" ? data.canonical : "",
    author: typeof data.author === "string" ? data.author : DEFAULT_AUTHOR,
    draft: data.draft === "true",
    content: resolvedBody,
  };
}

export function getBlogPosts(language: Language): BlogPostMeta[] {
  return Object.keys(rawIndex)
    .map((slug) => {
      const raw = resolveRaw(slug, language);
      return raw ? toPost(slug, raw) : null;
    })
    .filter((post): post is BlogPost => post !== null && !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string, language: Language): BlogPost | null {
  const raw = resolveRaw(slug, language);
  return raw ? toPost(slug, raw) : null;
}
