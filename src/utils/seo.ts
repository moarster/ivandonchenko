import { SITE_URL } from "@/components/SEO";
import pages from "@/seo/pages.json";
import type { BlogPostMeta } from "@/utils/blog";

type Language = "en" | "ru";

export interface PageMeta {
  title: string;
  description: string;
}

/**
 * Per-route title and description live in `seo/pages.json` rather than inline
 * in each page, because the prerender script has to read the same values to
 * bake them into the static HTML that crawlers see.
 */
export function pageMeta(path: keyof typeof pages, language: Language) {
  return pages[path][language] as PageMeta;
}

const PERSON = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Ivan Donchenko",
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
} as const;

export function personJsonLd(language: Language) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Ivan Donchenko",
        inLanguage: language,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        ...PERSON,
        description:
          language === "en"
            ? "Full-cycle technical leader: requirements, architecture, delivery, people and code review."
            : "Технический руководитель полного цикла: требования, архитектура, сроки, люди и код-ревью.",
      },
    ],
  };
}

export function blogJsonLd(language: Language, posts: BlogPostMeta[]) {
  const prefix = language === "en" ? "/en" : "";
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}${prefix}/blog#blog`,
    url: `${SITE_URL}${prefix}/blog`,
    inLanguage: language,
    author: { "@id": `${SITE_URL}/#person` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}${prefix}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };
}

export function blogPostJsonLd(language: Language, post: BlogPostMeta) {
  const prefix = language === "en" ? "/en" : "";
  const url = `${SITE_URL}${prefix}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: language,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    ...(post.image ? { image: `${SITE_URL}${post.image}` } : {}),
    keywords: post.tags.join(", "),
    wordCount: post.readTime * 200,
    author: { ...PERSON },
    publisher: { "@id": `${SITE_URL}/#person` },
    mainEntityOfPage: { "@type": "WebPage", "@id": post.canonical || url },
  };
}
