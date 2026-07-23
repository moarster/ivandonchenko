import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { SEO } from "@/components/SEO";
import aboutEn from "@/content/about/index.en.md?raw";
import aboutRu from "@/content/about/index.ru.md?raw";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
  const { language } = useLanguage();
  const content = language === "en" ? aboutEn : aboutRu;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SEO
        title={
          language === "en"
            ? "About — Ivan Donchenko"
            : "Обо мне — Иван Донченко"
        }
        description={
          language === "en"
            ? "Background, education, and interests of Ivan Donchenko — business architect and analyst from Saint Petersburg."
            : "Опыт, образование и интересы Ивана Донченко — бизнес-архитектора и аналитика из Санкт-Петербурга."
        }
      />
      <MarkdownRenderer content={content} />
    </div>
  );
}
