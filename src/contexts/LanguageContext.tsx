import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  localePath: (path: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    about: "About Me",
    cv: "CV",
    projects: "Projects",
    services: "Services",
    blog: "Blog",
    blogSubtitle:
      "Thoughts on software architecture, real-world cases, and technical insights",
    minRead: "min read",
    backToBlog: "Back to Blog",
    postNotFound: "Post not found",
    noPosts: "No posts yet",
    contact: "Contact",
    readMore: "Read more",
    allProjects: "All Projects",
    viewDetails: "View Details",
    getInTouch: "Get in Touch",
    basedIn: "Based in",
  },
  ru: {
    home: "Главная",
    about: "Обо мне",
    cv: "Резюме",
    projects: "Проекты",
    services: "Услуги",
    blog: "Блог",
    blogSubtitle:
      "Мысли об архитектуре ПО, реальные кейсы и технические инсайты",
    minRead: "мин чтения",
    backToBlog: "Назад к блогу",
    postNotFound: "Статья не найдена",
    noPosts: "Пока нет статей",
    contact: "Контакты",
    readMore: "Читать далее",
    allProjects: "Все проекты",
    viewDetails: "Подробнее",
    getInTouch: "Связаться",
    basedIn: "Базируюсь в",
  },
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "ru",
  setLanguage: () => {},
  t: (key: string) => key,
  localePath: (path: string) => path,
});

const isEnglishPath = (pathname: string) =>
  pathname === "/en" || pathname.startsWith("/en/");

const stripLocale = (pathname: string) =>
  pathname.replace(/^\/en(?=\/|$)/, "") || "/";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const language: Language = isEnglishPath(location.pathname) ? "en" : "ru";

  const localePath = (path: string): string => {
    if (language !== "en") return path;
    return path === "/" ? "/en" : `/en${path}`;
  };

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    const basePath = stripLocale(location.pathname);
    const target =
      lang === "en" ? (basePath === "/" ? "/en" : `/en${basePath}`) : basePath;
    navigate(`${target}${location.search}${location.hash}`);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, localePath }}>
      {children}
    </LanguageContext.Provider>
  );
}
