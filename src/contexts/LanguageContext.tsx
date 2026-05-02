import { createContext, useState } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    about: "About Me",
    cv: "CV",
    projects: "Projects",
    services: "Services",
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
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language") as Language;
    return stored || "ru";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
