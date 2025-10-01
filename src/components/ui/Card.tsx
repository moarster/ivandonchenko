import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

export function Card({ children, hover = false, className = '', ...props }: CardProps) {
    return (
        <div
            className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 ${
                hover ? 'transition-transform hover:scale-105 hover:shadow-xl' : ''
            } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}