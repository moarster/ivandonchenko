import matter from 'gray-matter';

export interface MarkdownFile {
    frontmatter: {
        title: string;
        date: string;
        description?: string;
        tags?: string[];
        cover?: string;
        weight?: number;
        [key: string]: unknown;
    };
    content: string;
    slug: string;
}

export function parseMarkdown(raw: string, slug: string): MarkdownFile {
    const { data, content } = matter(raw);

    return {
        frontmatter: data as MarkdownFile['frontmatter'],
        content,
        slug,
    };
}

export function calculateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

export function formatDate(date: string, locale: string = 'en'): string {
    return new Date(date).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}