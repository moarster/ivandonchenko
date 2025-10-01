import { createContext, useState } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        home: 'Home',
        about: 'About Me',
        cv: 'CV',
        projects: 'Projects',
        blog: 'Blog',
        contact: 'Contact',
        readMore: 'Read more',
        latestPosts: 'Latest Posts',
        allProjects: 'All Projects',
        viewDetails: 'View Details',
        backToBlog: 'Back to Blog',
        getInTouch: 'Get in Touch',
        downloadPDF: 'Download PDF',
        minRead: 'min read',
        basedIn: 'Based in',
    },
    ru: {
        home: 'Главная',
        about: 'Обо мне',
        cv: 'Резюме',
        projects: 'Проекты',
        blog: 'Блог',
        contact: 'Контакты',
        readMore: 'Читать далее',
        latestPosts: 'Последние посты',
        allProjects: 'Все проекты',
        viewDetails: 'Подробнее',
        backToBlog: 'Назад к блогу',
        getInTouch: 'Связаться',
        downloadPDF: 'Скачать PDF',
        minRead: 'мин чтения',
        basedIn: 'Базируюсь в',
    },
};

export const LanguageContext = createContext<LanguageContextType>({
    language: 'ru',
    setLanguage: () => {},
    t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        const stored = localStorage.getItem('language') as Language;
        return stored || 'ru';
    });

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}