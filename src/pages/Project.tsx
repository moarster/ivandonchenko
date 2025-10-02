import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {HiArrowLeft, HiCalendar, HiExternalLink} from 'react-icons/hi';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {useLanguage} from '@/hooks/useLanguage';
import {Button} from '@/components/ui/Button';
import matter from 'gray-matter';
import {formatDatePeriod} from "@/utils/dateFormatter.ts";

interface ProjectData {
    title: string;
    date: string;
    datePeriod: string;
    description: string;
    tags?: string[];
    role?: string;
    client?: string;
    link?: string;
    cover?: string;
    content: string;
}

async function fetchProjectMarkdown(slug: string, language: string): Promise<string | null> {
    const filePaths = [
        `/src/content/projects/${slug}/index.${language}.md`,
        `/src/content/projects/${slug}/index.md`,
    ];

    for (const path of filePaths) {
        try {
            const response = await fetch(path);
            if (response.ok) {
                return await response.text();
            }
        } catch {

        }
    }

    return null;
}

function parseProjectData(markdown: string): ProjectData {
    const {data, content} = matter(markdown);

    return {
        title: data.title || '',
        date: data.date || '',
        datePeriod: data.datePeriod || '',
        description: data.description || '',
        tags: data.tags || [],
        role: data.role,
        client: data.client,
        link: data.link,
        cover: data.cover,
        content,
    };
}

export function Project() {
    const {language} = useLanguage();
    const {slug} = useParams<{ slug: string }>();
    const [project, setProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function loadProject() {
            if (!slug) {
                setError(true);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(false);

                const markdown = await fetchProjectMarkdown(slug, language);

                if (!markdown) {
                    setError(true);
                    setLoading(false);
                    return;
                }

                const projectData = parseProjectData(markdown);
                setProject(projectData);
            } catch (err) {
                console.error('Error loading project:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        loadProject();
    }, [slug, language]);

    if (loading) {
        return <LoadingState language={language}/>;
    }

    if (error || !project) {
        return <ErrorState language={language}/>;
    }

    return <ProjectContent project={project} language={language}/>;
}

function LoadingState({language}: { language: string }) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center">
                {language === 'en' ? 'Loading...' : 'Загрузка...'}
            </div>
        </div>
    );
}

function ErrorState({language}: { language: string }) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <Button variant="ghost" asChild className="mb-8">
                    <Link to="/projects">
                        <HiArrowLeft className="w-4 h-4 mr-2"/>
                        {language === 'en' ? 'Back to Projects' : 'Назад к проектам'}
                    </Link>
                </Button>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                    {language === 'en' ? 'Project not found' : 'Проект не найден'}
                </p>
            </div>
        </div>
    );
}

function ProjectContent({project, language}: { project: ProjectData; language:  'en' | 'ru'  }) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <Button variant="ghost" asChild className="mb-8">
                    <Link to="/projects">
                        <HiArrowLeft className="w-4 h-4 mr-2"/>
                        {language === 'en' ? 'Back to Projects' : 'Назад к проектам'}
                    </Link>
                </Button>

                <article>
                    {project.cover && <ProjectCover cover={project.cover} title={project.title}/>}
                    <ProjectHeader project={project} language={language}/>
                    <MarkdownRenderer content={project.content}/>
                </article>
            </div>
        </div>
    );
}

function ProjectCover({cover, title}: { cover: string; title: string }) {
    return (
        <div className="w-full mb-8 rounded-lg overflow-hidden">
            <img src={cover} alt={title} className="w-full h-auto"/>
        </div>
    );
}

function ProjectHeader({project, language}: { project: ProjectData; language:  'en' | 'ru'  }) {
    return (
        <header className="mb-8">
            {/*<h1 className="text-4xl font-display font-bold mb-4">{project.title}</h1>*/}
            <ProjectMetadata project={project} language={language}/>
            {project.tags && project.tags.length > 0 && <ProjectTags tags={project.tags}/>}
            {project.link && <ProjectLink link={project.link} language={language}/>}
        </header>
    );
}

function ProjectMetadata({project, language}: { project: ProjectData; language: 'en' | 'ru' }) {
    return (
        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-4">
            <div className="flex items-center gap-2">
                <HiCalendar className="w-4 h-4"/>
                <span>{formatDatePeriod(project.datePeriod, language)}</span>
            </div>
            {project.client && (
                <div>
                    <span className="font-semibold">{language === 'en' ? 'Client' : 'Клиент'}:</span> {project.client}
                </div>
            )}
            {project.role && (
                <div>
                    <span className="font-semibold">{language === 'en' ? 'Role' : 'Роль'}:</span> {project.role}
                </div>
            )}
        </div>
    );
}

function ProjectTags({tags}: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}

function ProjectLink({link, language}: { link: string; language: string }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium"
        >
            {language === 'en' ? 'View Project' : 'Посмотреть проект'}
            <HiExternalLink className="w-4 h-4"/>
        </a>
    );
}
