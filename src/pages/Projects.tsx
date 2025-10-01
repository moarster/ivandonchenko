import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Projects() {
    const { language } = useLanguage();

    const projects = [
        {
            id: 'rfu',
            title: language === 'en' ? 'Russian Football Union Information System' : 'ИС Российского футбольного союза',
            description:
                language === 'en'
                    ? 'Digital transformation platform for RFU. Web-based DBMS, REST API, hybrid architecture. Winner of "Project of the Year Global CIO 2021".'
                    : 'Платформа цифровой трансформации РФС. Веб-СУБД, REST API, гибридная архитектура. Победитель "Проект года Global CIO 2021".',
            date: '2021-06',
            image: '/images/projects/rfs.en.png',
            tags: ['Architecture', 'REST API', 'BPM'],
            link: '/projects/rfu',
        },
        // Add more projects here
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-display font-bold mb-4">
                    {language === 'en' ? 'Projects' : 'Проекты'}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                    {language === 'en'
                        ? 'Major projects I\'ve architected and delivered'
                        : 'Крупные проекты, которые я спроектировал и реализовал'}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} hover className="overflow-hidden flex flex-col">
                            {project.image && (
                                <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(project.date).toLocaleDateString(language)}</span>
                                </div>
                                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <Link
                                    to={project.link}
                                    className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-2 font-medium"
                                >
                                    {language === 'en' ? 'View Details' : 'Подробнее'}
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}