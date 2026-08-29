import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://ivandonchenko.ru";
const DEFAULT_IMAGE = "/images/og-image.jpg";

interface SEOProps {
  title?: string;
  /** og:title without the site-name suffix that the <title> tag carries. */
  ogTitle?: string;
  description?: string;
  image?: string;
  type?: string;
  /** Overrides the self-referencing canonical (cross-posted articles). */
  canonical?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  /** Schema.org graph for this page, serialised into a JSON-LD script tag. */
  jsonLd?: object;
  /** Keeps 404s and missing articles out of the index. */
  noindex?: boolean;
}

const defaults = {
  en: {
    title: "Ivan Donchenko — Head of Development · Full-cycle Technical Leader",
    description:
      "Technical leader who owns the whole vertical: client, requirements, architecture, estimation, releases, people and code review — and writes code. 15 years in IT, 14 leading teams of 5 to 40 people.",
    siteName: "Ivan Donchenko",
  },
  ru: {
    title:
      "Иван Донченко — Лидер разработки · Технический руководитель полного цикла",
    description:
      "Технический руководитель, который закрывает всю вертикаль: заказчик, требования, архитектура, оценка, релизы, люди и код-ревью — и сам пишет код. 15 лет в IT, 14 лет руководства командами от 5 до 40 человек.",
    siteName: "Иван Донченко",
  },
};

/** Absolute URLs are required: crawlers do not resolve relative og:image. */
const absolute = (path: string) =>
  /^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`;

export function SEO({
  title,
  ogTitle,
  description,
  image = DEFAULT_IMAGE,
  type = "website",
  canonical,
  publishedTime,
  modifiedTime,
  tags,
  jsonLd,
  noindex = false,
}: SEOProps) {
  const location = useLocation();
  const isEnPath =
    location.pathname === "/en" || location.pathname.startsWith("/en/");
  const locale = defaults[isEnPath ? "en" : "ru"];
  const resolvedTitle = title ?? locale.title;
  const resolvedOgTitle = ogTitle ?? resolvedTitle;
  const resolvedDescription = description ?? locale.description;
  const serializedTags = tags?.join("|") ?? "";
  const serializedJsonLd = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = resolvedTitle;

    const path = location.pathname;
    const isEn = path === "/en" || path.startsWith("/en/");
    const ruPath = isEn ? path.replace(/^\/en(?=\/|$)/, "") || "/" : path;
    const enPath = ruPath === "/" ? "/en" : `/en${ruPath}`;
    const url = `${SITE_URL}${path}`;

    document.documentElement.lang = isEn ? "en" : "ru";

    const metaTags: {
      name?: string;
      property?: string;
      content: string;
    }[] = [
      { name: "description", content: resolvedDescription },
      {
        name: "robots",
        content: noindex ? "noindex, follow" : "index, follow",
      },
      { property: "og:title", content: resolvedOgTitle },
      { property: "og:description", content: resolvedDescription },
      { property: "og:image", content: absolute(image) },
      { property: "og:image:alt", content: resolvedOgTitle },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:locale", content: isEn ? "en_US" : "ru_RU" },
      { property: "og:locale:alternate", content: isEn ? "ru_RU" : "en_US" },
      { property: "og:site_name", content: locale.siteName },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: resolvedOgTitle },
      { name: "twitter:description", content: resolvedDescription },
      { name: "twitter:image", content: absolute(image) },
    ];

    if (type === "article") {
      metaTags.push({ property: "article:author", content: "Ivan Donchenko" });
      if (publishedTime) {
        metaTags.push({
          property: "article:published_time",
          content: publishedTime,
        });
      }
      if (modifiedTime) {
        metaTags.push({
          property: "article:modified_time",
          content: modifiedTime,
        });
      }
    }

    for (const { name, property, content } of metaTags) {
      const selector = name
        ? `meta[name="${name}"]`
        : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    }

    // article:tag repeats, so it cannot be addressed by a single selector like
    // the tags above: the previous page's set is dropped and rewritten.
    for (const stale of document.querySelectorAll(
      'meta[property="article:tag"]',
    )) {
      stale.remove();
    }
    for (const tag of serializedTags ? serializedTags.split("|") : []) {
      const element = document.createElement("meta");
      element.setAttribute("property", "article:tag");
      element.setAttribute("content", tag);
      document.head.appendChild(element);
    }

    const linkTags = [
      { rel: "canonical", hreflang: null, href: canonical ?? url },
      { rel: "alternate", hreflang: "ru", href: `${SITE_URL}${ruPath}` },
      { rel: "alternate", hreflang: "en", href: `${SITE_URL}${enPath}` },
      { rel: "alternate", hreflang: "x-default", href: `${SITE_URL}${ruPath}` },
    ];

    for (const { rel, hreflang, href } of linkTags) {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        if (hreflang) element.setAttribute("hreflang", hreflang);
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    }

    const ldId = "seo-jsonld";
    document.getElementById(ldId)?.remove();
    if (serializedJsonLd) {
      const script = document.createElement("script");
      script.id = ldId;
      script.type = "application/ld+json";
      script.textContent = serializedJsonLd;
      document.head.appendChild(script);
    }
  }, [
    resolvedTitle,
    resolvedOgTitle,
    resolvedDescription,
    image,
    type,
    canonical,
    publishedTime,
    modifiedTime,
    serializedTags,
    serializedJsonLd,
    noindex,
    locale.siteName,
    location.pathname,
  ]);

  return null;
}
