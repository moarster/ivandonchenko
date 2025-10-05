// noinspection D

import {Card} from '@/components/ui/Card';
import {TagList} from '@/components/ui/TagList';
import {useLanguage} from '@/hooks/useLanguage';
import {HiCalendar} from 'react-icons/hi';
import {formatDatePeriod} from '@/utils/dateFormatter';

export function Projects() {
    const {language} = useLanguage();

    const projects = [
        {
            id: 'gas-ps',
            title:
                language === 'en'
                    ? 'GAS PS'
                    : 'ГАС ПС',
            description:
                language === 'en'
                    ? 'MDM and metadata component powered by Soarse within the GAS PS Portal of the General Prosecutor\'s Office of the Russian Federation'
                    : 'Подсистема НСИ и метаданных на базе Soarse в составе Портала ГАС ПС Генпрокуратуры РФ',
            datePeriod: '2021-10-15 - 2023-01-31',
            image: '/images/projects/gas-ps.card.png',
            tags: language === 'en'
                ? ['B2G', 'Microservices', 'MDM', 'Metadata', 'Low-Code']
                : ['B2G', 'Microservices', 'MDM', 'Метаданные', 'Low-Code'],
            link: '/projects/gas-ps',
        },
        {
            id: 'rfs',
            title:
                language === 'en'
                    ? 'Information System of the Russian Football Union'
                    : 'Информационная Система Российского футбольного союза',
            description:
                language === 'en'
                    ? 'Digital transformation project of the RFU, powered by Soarse platform'
                    : 'Проект цифровой трансформации РФС, разработанный на базе платформы Soarse',
            datePeriod: '2020-09-01 - 2021-06-21',
            image: '/images/projects/rfs.card.png',
            tags: ['Microservices', 'MDM', 'Low-Code'],
            link: '/projects/rfs',
        },
        {
            id: 'soarse',
            title: 'Soarse',
            description:
                language === 'en'
                    ? 'Next-generation Low-Code platform for business automation, data management, and building corporate information systems'
                    : 'Low-Code платформа нового поколения для автоматизации бизнеса, управления данными и построения корпоративных информационных систем',
            datePeriod: '2020-01-01 - 2023-02-20',
            image: '/images/projects/soarse.card.png',
            tags: ['Low-Code', 'Startups', 'BPM', 'MDM', 'Spring Cloud', 'ABAC', 'React'],
            link: '/projects/soarse',
        },
        {
            id: 'iek-spb',
            title:
                language === 'en'
                    ? 'RS IEC'
                    : 'РС ИЭК',
            description:
                language === 'en'
                    ? 'Digital platform for monitoring, planning and management of engineering and energy infrastructure of St. Petersburg.'
                    : 'Цифровая платформа для мониторинга, планирования и управления инженерной и энергетической инфраструктурой Санкт-Петербурга.',
            datePeriod: '2017-10-01 - 2020-01-31',
            image: '/images/projects/iek-spb.card.png',
            tags: language === 'en'
                ? ['Java', 'Spring', 'PostgreSQL', 'GIS', 'Big Data', 'DevOps', 'Data Governance', 'Energy', 'Analytics', 'B2G']
                : ['Java', 'Spring', 'PostgreSQL', 'GIS', 'Big Data', 'DevOps', 'Data Governance', 'Инженерная инфраструктура', 'Энергетика', 'ГИС', 'Аналитика', 'B2G'],
            link: '/projects/iek-spb',
        },
        {
            id: 'apk-bg',
            title:
                language === 'en'
                    ? 'Safe City Sakhalin'
                    : 'АПК БГ',
            description:
                language === 'en'
                    ? 'An integrated public safety system with video surveillance, analytics, and subsystem integration for the regional level.'
                    : 'Комплексная система общественной безопасности с видеонаблюдением, аналитикой и интеграцией подсистем для регионального уровня.',
            datePeriod: '2017-03-01 - 2017-11-01',
            image: '/images/projects/apk-bg.card.png',
            tags: language === 'en'
                ? ['Java Spring', 'React', 'Postgres', 'Project Management', 'Requirements Analysis', 'Video Surveillance', 'Integration']
                : ['Java Spring', 'React', 'Postgres', 'Проектное управление', 'Анализ требований', 'Видеонаблюдение', 'Интеграция'],
            link: '/projects/apk-bg',
        },
        {
            id: 'as-sioi',
            title:
                language === 'en'
                    ? 'AS SIOI'
                    : 'АС СиОИ',
            description:
                language === 'en'
                    ? 'Comprehensive portal for monitoring Russian energy sector investment programs with reporting integration and analytics'
                    : 'Автоматизированная система сбора и обработки отчетности',
            datePeriod: '2013-12-01 - 2017-02-28',
            image: '/images/projects/as-sioi.card.png',
            tags: language === 'en'
                ? ['Java', 'Oracle', 'SAP BO', 'Analytics', 'Data Engineering']
                : ['Java', 'Oracle', 'SAP BO', 'Аналитика', 'Data Engineering'],
            link: '/projects/as-sioi',
        },
        {
            id: 'portal-mdo',
            title:
                language === 'en'
                    ? 'Portal MDO'
                    : 'Портал МДО',
            description:
                language === 'en'
                    ? 'Comprehensive portal for monitoring Russian energy sector investment programs with reporting integration and analytics'
                    : 'Проект по разработке портала для мониторинга инвестиционных программ в электроэнергетике',
            datePeriod: '2012-01-01 - 2017-02-21',
            image: '/images/projects/portal-mdo.card.png',
            tags: language === 'en'
                ? ['Energy', 'Monitoring', 'B2G']
                : ['Энергетика', 'Мониторинг', 'B2G'],
            link: '/projects/portal-mdo',
        },
        {
            id: 'portal-mip',
            title:
                language === 'en'
                    ? 'MIP Portal'
                    : 'Портал МИП',
            description:
                language === 'en'
                    ? 'Project for developing a portal to monitor investment programs in the energy sector, including video surveillance of construction and analytical reports.'
                    : 'Проект по разработке портала для мониторинга инвестиционных программ в электроэнергетике, включающий видеонаблюдение за строительством и аналитические отчёты.',
            datePeriod: '2011-07-01 - 2012-02-28',
            image: '/images/projects/portal-mip.card.png',
            tags: language === 'en'
                ? ['Java', 'Oracle', 'WebLogic', 'JavaScript', 'UX/UI', 'requirements analysis', 'project management']
                : ['Java', 'Oracle', 'WebLogic', 'JavaScript', 'UX/UI', 'анализ требований', 'управление проектом'],
            link: '/projects/portal-mip',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-display font-bold mb-4">
                    {language === 'en' ? 'Projects' : 'Проекты'}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                    {language === 'en'
                        ? 'Major projects I\'ve been lucky to be part of'
                        : 'Крупные проекты, в которых мне посчастливилось поучаствовать'}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} hover className="overflow-hidden flex flex-col">
                            {project.image && (
                                <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6 flex-1 flex flex-col">
                                <div
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
                                    <HiCalendar className="w-4 h-4"/>
                                    <span>{formatDatePeriod(project.datePeriod, language)}</span>
                                </div>
                                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                                    {project.description}
                                </p>
                                <TagList tags={project.tags} className="mb-4" />
                                {/*        <Link
                                    to={project.link}
                                    className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-2 font-medium"
                                >
                                    {language === 'en' ? 'View Details' : 'Подробнее'}
                                    <HiExternalLink className="w-4 h-4" />
                                </Link>*/}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}