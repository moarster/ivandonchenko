import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef, cloneElement, isValidElement } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
    children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'primary', size = 'md', className = '', asChild, ...props }, ref) => {
        const baseStyles =
            'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
            secondary:
                'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600',
            ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
        };

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        if (asChild && isValidElement(children)) {
            // Clone the child element and merge props
            const childProps = children.props as any;
            return cloneElement(children, {
                ...props,
                className: `${childProps.className || ''} ${classes}`.trim(),
                ref,
            } as any);
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';