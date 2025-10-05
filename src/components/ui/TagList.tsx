import type { HTMLAttributes } from 'react';

interface TagListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    tags: string[];
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent';
}

const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
};

const variantClasses = {
    primary: 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300',
    secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
    accent: 'bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300',
};

export function TagList({
    tags,
    size = 'md',
    variant = 'primary',
    className = '',
    ...props
}: TagListProps) {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`} {...props}>
            {tags.map((tag) => (
                <span
                    key={tag}
                    className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full`}
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}