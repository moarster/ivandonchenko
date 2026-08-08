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
    services: "Formats",
    blog: "Blog",
    blogSubtitle:
      "On teams, deadlines, and the systems they build — and on how AI is changing engineering work. Real cases, no tutorials.",
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
    discussCase: "Discuss an opportunity",
    seeCases: "See the projects",
    reply24h: "I reply within 24 hours",
  },
  ru: {
    home: "Главная",
    about: "Обо мне",
    cv: "Резюме",
    projects: "Проекты",
    services: "Форматы",
    blog: "Блог",
    blogSubtitle:
      "О командах, сроках и системах, которые они создают, — и о том, как нейросети меняют инженерную работу. Реальные кейсы, без туториалов.",
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
    discussCase: "Обсудить сотрудничество",
    seeCases: "Смотреть проекты",
    reply24h: "Отвечаю в течение 24 часов",
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
