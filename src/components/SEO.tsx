import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
}

export function SEO({
                        title = 'Ivan Donchenko - Lead Software Architect',
                        description = 'Software architect with 15+ years of experience in designing scalable systems and leading digital transformation projects',
                        image = '/images/og-image.jpg',
                        type = 'website'
                    }: SEOProps) {
    const location = useLocation();
    const url = `https://moarse.ru${location.pathname}`;

    useEffect(() => {
        document.title = title;

        // Update meta tags
        const metaTags = [
            { name: 'description', content: description },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:url', content: url },
            { property: 'og:type', content: type },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image },
        ];

        metaTags.forEach(({ name, property, content }) => {
            const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
            let element = document.querySelector(selector);

            if (!element) {
                element = document.createElement('meta');
                if (name) element.setAttribute('name', name);
                if (property) element.setAttribute('property', property);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        });
    }, [title, description, image, url, type]);

    return null;
}