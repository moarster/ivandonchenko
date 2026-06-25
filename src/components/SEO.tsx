import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export function SEO({
  title = "Ivan Donchenko - Lead Software Architect",
  description = "Software architect with 15+ years of experience in designing scalable systems and leading digital transformation projects",
  image = "/images/og-image.jpg",
  type = "website",
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const base = "https://ivandonchenko.ru";
    const path = location.pathname;
    const isEn = path === "/en" || path.startsWith("/en/");
    const ruPath = isEn ? path.replace(/^\/en(?=\/|$)/, "") || "/" : path;
    const enPath = ruPath === "/" ? "/en" : `/en${ruPath}`;
    const url = `${base}${path}`;

    document.documentElement.lang = isEn ? "en" : "ru";

    const metaTags = [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:locale", content: isEn ? "en_US" : "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
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
  }, [title, description, image, type, location.pathname]);

  return null;
}
