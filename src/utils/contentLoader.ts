export interface BlogPostMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags?: string[];
    readTime: number;
}

export interface ProjectMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
    cover?: string;
    weight?: number;
}
/*

// Example: Load all blog posts
// In a real app, you'd use Vite's import.meta.glob
export async function getBlogPosts(language: 'en' | 'ru'): Promise<BlogPostMeta[]> {
    // Placeholder - you'll need to implement actual file loading
    // Using Vite's glob import: const modules = import.meta.glob('/src/content/blog/!*.md')
    return [];
}

export async function getBlogPost(slug: string, language: 'en' | 'ru'): Promise<{ meta: BlogPostMeta; content: string } | null> {
    // Placeholder - implement actual file loading
    return null;
}

export async function getProjects(language: 'en' | 'ru'): Promise<ProjectMeta[]> {
    // Placeholder - implement actual file loading
    return [];
}

export async function getProject(slug: string, language: 'en' | 'ru'): Promise<{ meta: ProjectMeta; content: string } | null> {
    // Placeholder - implement actual file loading
    return null;
}*/
