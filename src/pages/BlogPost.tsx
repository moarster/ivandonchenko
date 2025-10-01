import {  Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

export function BlogPost() {
    const { language } = useLanguage();

    // This would normally load the actual markdown file
    const post = {
        title: 'Example Blog Post',
        date: '2025-10-01',
        readTime: 5,
        content: `# Example Post

This is where your blog post content would go. Load it from markdown files in the \`src/content/blog/\` directory.

## Section 1

Some content here...

## Section 2

More content...`,
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <Button variant="ghost" asChild className="mb-8">
                    <Link to="/blog">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {language === 'en' ? 'Back to Blog' : 'Назад к блогу'}
                    </Link>
                </Button>

                <article>
                    <header className="mb-8">
                        <h1 className="text-4xl font-display font-bold mb-4">{post.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
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
                    </header>

                    <MarkdownRenderer content={post.content} />
                </article>
            </div>
        </div>
    );
}