import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { useLanguage } from '@/hooks/useLanguage';
import aboutEn from '@/content/about/index.en.md?raw';
import aboutRu from '@/content/about/index.ru.md?raw';

export function About() {
    const { language } = useLanguage();
    const content = language === 'en' ? aboutEn : aboutRu;

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <MarkdownRenderer content={content} />
        </div>
    );
}