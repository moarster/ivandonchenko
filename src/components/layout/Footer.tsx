import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export function Footer() {
    return (
        <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 dark:text-slate-400">
                        © 2025 Ivan Donchenko. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://linkedin.com/in/ivandonchenko"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-5 h-5"/>
                        </a>
                        <a
                            href="mailto:ivan@moarse.ru"
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
                            aria-label="Email"
                        >
                            <FaGithub className="w-5 h-5"/>
                        </a>
                        <a
                            href="https://t.me/ivandonchenko"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
                            aria-label="Telegram"
                        >
                            <FaTelegram className="w-5 h-5"/>
                        </a>
                        <a
                            href="mailto:ivan@moarse.ru"
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
                            aria-label="Email"
                        >
                            <FiMail className="w-5 h-5"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}