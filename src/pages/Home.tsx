import { Link } from 'react-router-dom';
import { ArrowRight, Code, Briefcase, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';

export function Home() {
    const { language, t } = useLanguage();

    const features = [
        {
            icon: <Code className="w-8 h-8" />,
            title: language === 'en' ? 'Software Architecture' : 'Архитектура ПО',
            description: language === 'en'
                ? '12+ years of experience designing scalable systems'
                : '12+ лет опыта проектирования масштабируемых систем',
            link: '/cv',
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: language === 'en' ? 'Major Projects' : 'Крупные проекты',
            description: language === 'en'
                ? 'Government and commercial projects from scratch to production'
                : 'Государственные и коммерческие проекты от идеи до продакшена',
            link: '/projects',
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: language === 'en' ? 'Technical Blog' : 'Технический блог',
            description: language === 'en'
                ? 'Sharing real-world cases and architectural decisions'
                : 'Делюсь реальными кейсами и архитектурными решениями',
            link: '/blog',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <section className="text-center py-20">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-slate-50 mb-6">
                    {language === 'en' ? 'Lead Software Architect' : 'Ведущий архитектор ПО'}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                    {language === 'en'
                        ? 'Designing scalable systems and leading digital transformation projects'
                        : 'Проектирую масштабируемые системы и руковожу проектами цифровой трансформации'}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Button size="lg" asChild>
                        <Link to="/contact">
                            {language === 'en' ? 'Get in Touch' : 'Связаться'}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                        <Link to="/projects">{language === 'en' ? 'View Projects' : 'Мои проекты'}</Link>
                    </Button>
                </div>
            </section>

            {/* Features Grid */}
            <section className="grid md:grid-cols-3 gap-8 py-12">
                {features.map((feature, index) => (
                    <Card key={index} hover className="p-6">
                        <div className="text-primary-500 mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{feature.description}</p>
                        <Link
                            to={feature.link}
                            className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-2"
                        >
                            {t('readMore')}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Card>
                ))}
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white my-12">
                <h2 className="text-3xl font-display font-bold mb-4">
                    {language === 'en' ? 'Need an Expert?' : 'Нужен эксперт?'}
                </h2>
                <p className="text-xl mb-6 opacity-90">
                    {language === 'en'
                        ? "Let's discuss how I can help with your project"
                        : 'Давайте обсудим, как я могу помочь вашему проекту'}
                </p>
                <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">{language === 'en' ? 'Contact Me' : 'Написать мне'}</Link>
                </Button>
            </section>
        </div>
    );
}