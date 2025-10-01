import {Card} from '@/components/ui/Card';
import {useLanguage} from '@/hooks/useLanguage';
import {FaLinkedin, FaTelegram, FaGithub} from 'react-icons/fa';
import {FiMail, FiPhone, FiFileText, FiBriefcase} from 'react-icons/fi';

export function Contact() {
    const {language} = useLanguage();

    const contacts = [
        {
            icon: <FiPhone className="w-6 h-6"/>,
            label: language === 'en' ? 'Phone' : 'Телефон',
            value: '+7 (995) 780-40-56',
            href: 'tel:+79957804056',
        },
        {
            icon: <FiMail className="w-6 h-6"/>,
            label: 'Email',
            value: 'ivan@moarse.ru',
            href: 'mailto:ivan@moarse.ru',
        },
        {
            icon: <FaTelegram className="w-6 h-6"/>,
            label: 'Telegram',
            value: '@moarse',
            href: 'https://t.me/moarse',
        },
        {
            icon: <FaLinkedin className="w-6 h-6"/>,
            label: 'LinkedIn',
            value: 'ivandonchenko',
            href: 'https://linkedin.com/in/ivandonchenko',
        },
        {
            icon: <FaGithub className="w-6 h-6"/>,
            label: 'GitHub',
            value: 'moarster',
            href: 'https://github.com/moarster',
        },
        {
            icon: <FiBriefcase className="w-6 h-6"/>,
            label: 'Habr Career',
            value: 'moares',
            href: 'https://career.habr.com/moares',
        },
        {
            icon: <FiFileText className="w-6 h-6"/>,
            label: 'HeadHunter',
            value: language === 'en' ? 'My Resume' : 'Моё резюме',
            href: 'https://spb.hh.ru/resume/2dff6faeff0cde804d0039ed1f4b3074475038',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-display font-bold mb-4">
                    {language === 'en' ? 'Contact Me' : 'Контакты'}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                    {language === 'en'
                        ? 'Feel free to reach out through any of these channels. I prefer Telegram or email and typically respond within 24 hours.'
                        : 'Свяжитесь со мной любым удобным способом. Предпочитаю Telegram или email. Отвечаю в течение 24 часов.'}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {contacts.map((contact, index) => (
                        <Card key={index} hover className="p-6">
                            <a
                                href={contact.href}
                                target={contact.href.startsWith('http') ? '_blank' : undefined}
                                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex items-start gap-4 group"
                            >
                                <div className="text-primary-500 group-hover:text-primary-600 transition-colors">
                                    {contact.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary-500 transition-colors">
                                        {contact.label}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">{contact.value}</p>
                                </div>
                            </a>
                        </Card>
                    ))}
                </div>

                {/* Map or additional info */}
                <Card
                    className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-slate-800 dark:to-slate-700 border-primary-200 dark:border-slate-600">
                    <h2 className="text-2xl font-display font-bold mb-4">
                        {language === 'en' ? 'Let\'s Work Together' : 'Давайте работать вместе'}
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        {language === 'en'
                            ? "I'm always interested in hearing about new projects and opportunities. Whether you need a software architect, technical consultant, or development lead, let's discuss how I can help."
                            : 'Я всегда заинтересован в новых проектах и возможностях. Нужен ли вам архитектор ПО, технический консультант или руководитель разработки — давайте обсудим, как я могу помочь.'}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {language === 'en'
                            ? '📍 Based in Frankfurt am Main, Germany'
                            : '📍 Базируюсь во Франкфурте-на-Майне, Германия'}
                    </p>
                </Card>
            </div>
        </div>
    );
}