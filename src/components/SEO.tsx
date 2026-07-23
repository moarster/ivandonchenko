import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const defaults = {
  en: {
    title: "Ivan Donchenko — Business Architect · BPM & AI Process Automation",
    description:
      "Business architect and analyst with 15 years in IT. Business process automation (Camunda/Flowable), AI agents in workflows, integrations and data — from analysis to production.",
  },
  ru: {
    title: "Иван Донченко — Бизнес-архитектор · Автоматизация бизнес-процессов",
    description:
      "Бизнес-архитектор и аналитик с 15-летним инженерным бэкграундом. Автоматизация процессов на Camunda/Flowable, AI-агенты в бизнес-процессах, интеграции и данные.",
  },
};

export function SEO({
  title,
  description,
  image = "/images/og-image.jpg",
  type = "website",
}: SEOProps) {
  const location = useLocation();
  const isEnPath =
    location.pathname === "/en" || location.pathname.startsWith("/en/");
  const locale = defaults[isEnPath ? "en" : "ru"];
  const resolvedTitle = title ?? locale.title;
  const resolvedDescription = description ?? locale.description;

  useEffect(() => {
    document.title = resolvedTitle;

    const base = "https://ivandonchenko.ru";
    const path = location.pathname;
    const isEn = path === "/en" || path.startsWith("/en/");
    const ruPath = isEn ? path.replace(/^\/en(?=\/|$)/, "") || "/" : path;
    const enPath = ruPath === "/" ? "/en" : `/en${ruPath}`;
    const url = `${base}${path}`;

    document.documentElement.lang = isEn ? "en" : "ru";

    const metaTags = [
      { name: "description", content: resolvedDescription },
      { property: "og:title", content: resolvedTitle },
      { property: "og:description", content: resolvedDescription },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:locale", content: isEn ? "en_US" : "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: resolvedTitle },
      { name: "twitter:description", content: resolvedDescription },
      { name: "twitter:image", content: image },
    ];

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

    const linkTags = [
      { rel: "canonical", hreflang: null, href: url },
      { rel: "alternate", hreflang: "ru", href: `${base}${ruPath}` },
      { rel: "alternate", hreflang: "en", href: `${base}${enPath}` },
      { rel: "alternate", hreflang: "x-default", href: `${base}${ruPath}` },
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
  }, [resolvedTitle, resolvedDescription, image, type, location.pathname]);

  return null;
}
