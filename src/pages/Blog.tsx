import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Blog() {
    const { language } = useLanguage();

    // This would normally come from your markdown files
    const posts = [
        {
            slug: 'example-post',
            title: language === 'en' ? 'Example Blog Post' : 'Пример поста блога',
            excerpt:
                language === 'en'
                    ? 'This is an example blog post. Replace with your actual content.'
                    : 'Это пример поста блога. Замените на реальный контент.',
            date: '2025-10-01',
            readTime: 5,
            tags: ['Architecture', 'React', 'TypeScript'],
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-display font-bold mb-4">
                    {language === 'en' ? 'Blog' : 'Блог'}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                    {language === 'en'
                        ? 'Thoughts on software architecture, real-world cases, and technical insights'
                        : 'Мысли об архитектуре ПО, реальные кейсы и технические инсайты'}
                </p>

                <div className="space-y-8">
                    {posts.map((post) => (
                        <Card key={post.slug} hover className="p-6">
                            <Link to={`/blog/${post.slug}`}>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(post.date).toLocaleDateString(language)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>
                      {post.readTime} {language === 'en' ? 'min read' : 'мин чтения'}
                    </span>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-display font-bold mb-3 hover:text-primary-500 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                                        >
                      <Tag className="w-3 h-3" />
                                            {tag}
                    </span>
                                    ))}
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}