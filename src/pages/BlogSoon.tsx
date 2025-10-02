import { useLanguage } from '@/hooks/useLanguage';
import { HiPencil, HiClock, HiLightBulb } from 'react-icons/hi';

export function BlogSoon() {
    const { language } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-12 min-h-[60vh] flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center">
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900/30">
                    <HiPencil className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                    {language === 'en' ? 'Blog Coming Soon' : 'Блог скоро появится'}
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                    {language === 'en'
                        ? 'I\'m preparing insightful articles about software architecture, data governance, and tech leadership. Stay tuned!'
                        : 'Готовлю интересные статьи о системной архитектуре, обработке данных и управлении в IT. Следите за обновлениями!'}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <HiLightBulb className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">
                            {language === 'en' ? 'Technical Insights' : 'Технические инсайты'}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {language === 'en'
                                ? 'Deep dives into architecture patterns and best practices'
                                : 'Анализ архитектурных паттернов и лучших практик'}
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <HiClock className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">
                            {language === 'en' ? 'Real Experience' : 'Реальный опыт'}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {language === 'en'
                                ? 'Lessons learned from building large-scale systems'
                                : 'Опыт, почерпнутый при создании крупномасштабных систем'}
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <HiPencil className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">
                            {language === 'en' ? 'Practical Guides' : 'Практические гайды'}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {language === 'en'
                                ? 'Step-by-step tutorials and actionable advice'
                                : 'Пошаговые руководства и практические советы'}
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-500 dark:text-slate-500">
                        {language === 'en'
                            ? 'First posts are scheduled for early 2026'
                            : 'Первые посты запланированы на начало 2026 года'}
                    </p>
                </div>
            </div>
        </div>
    );
}
