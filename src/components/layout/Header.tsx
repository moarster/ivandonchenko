import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navItems = [
        { path: '/', label: t('home') },
        { path: '/about', label: t('about') },
        { path: '/cv', label: t('cv') },
        { path: '/projects', label: t('projects') },
        { path: '/blog', label: t('blog') },
        { path: '/contact', label: t('contact') },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-display font-bold text-primary-500 hover:text-primary-600 transition-colors">
                        Ivan Donchenko
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                        >
                            {language === 'en' ? 'RU' : 'EN'}
                        </Button>
                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <HiMenu className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2">
                        {navItems.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="py-2 text-slate-700 dark:text-slate-300 hover:text-primary-500 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}