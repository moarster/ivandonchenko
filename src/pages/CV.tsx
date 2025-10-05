import {Card} from '@/components/ui/Card';
import {useLanguage} from '@/hooks/useLanguage';
import {HiBriefcase, HiAcademicCap, HiCode, HiDatabase, HiUsers} from 'react-icons/hi';
import {Button} from '@/components/ui/Button';
import {TagList} from "@/components/ui/TagList.tsx";

const HHIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" className="inline-block">
        <g fillRule="nonzero" fillOpacity="1">
            <path d="M24 48c13.254 0 24-10.746 24-24S37.254 0 24 0 0 10.746 0 24s10.746 24 24 24zm0 0" fill="#ff0002"/>
            <path
                d="M35.676 20.46c-.727-.75-1.758-1.16-3.02-1.16-1.562 0-2.765.637-3.46 1.829v-5.91h-3.63v16.203h3.63v-5.695c0-1.329.273-2.18.683-2.68.394-.5.953-.692 1.555-.692.53 0 .953.168 1.246.477.297.316.465.805.465 1.484v7.094h3.632v-7.808c0-1.329-.386-2.407-1.101-3.141zM19.438 19.3c-1.567 0-2.77.637-3.461 1.829v-5.91h-3.63v16.203h3.63v-5.695c0-1.329.273-2.18.68-2.68.398-.5.956-.692 1.554-.692.535 0 .953.168 1.25.477.297.316.465.805.465 1.484v7.094h3.633v-7.808c0-1.329-.387-2.407-1.114-3.153-.715-.75-1.746-1.148-3.008-1.148zm0 0"
                fill="#fff"/>
        </g>
    </svg>
);

export function CV() {
    const {language} = useLanguage();

    const skills = {
        en: {
            title: 'Skills & Expertise',
            items: [
                {icon: <HiCode/>, title: 'Programming Languages', desc: 'Java, JavaScript, TypeScript, Python, PL/SQL'},
                {
                    icon: <HiDatabase/>,
                    title: 'Databases & Storage',
                    desc: 'PostgreSQL, Oracle, MongoDB, Redis, Kafka, RabbitMQ'
                },
                {
                    icon: <HiBriefcase/>,
                    title: 'Architecture & Tools',
                    desc: 'Microservices, REST API, Docker, Camunda, Spring Cloud'
                },
                {
                    icon: <HiUsers/>,
                    title: 'Management & Leadership',
                    desc: 'Team Lead, Product Management, Agile, Scrum'
                },
            ],
        },
        ru: {
            title: 'Навыки и экспертиза',
            items: [
                {
                    icon: <HiCode/>,
                    title: 'Языки программирования',
                    desc: 'Java, JavaScript, TypeScript, Python, PL/SQL'
                },
                {
                    icon: <HiDatabase/>,
                    title: 'Базы данных и хранилища',
                    desc: 'PostgreSQL, Oracle, MongoDB, Minio, Redis, Kafka, RabbitMQ'
                },
                {
                    icon: <HiBriefcase/>,
                    title: 'Архитектура и инструменты',
                    desc: 'Микросервисы, REST API, Docker, Camunda, Spring Cloud'
                },
                {
                    icon: <HiUsers/>,
                    title: 'Управление и лидерство',
                    desc: 'Team Lead, Product Management, Agile, Scrum'
                },
            ],
        },
    };

    const experience = {
        en: [
            {
                period: '2024 - 2025',
                role: 'System architect',
                company: 'Solvo',
                description: 'Architecture and implementation of an internal microservice platform for product development',
                tags: ['Camunda', 'Spring Cloud'],
            },
            {
                period: '2020 - 2023',
                role: 'Product architect',
                company: 'Galor',
                description: 'Product and architecture design, database and API modeling. Development and execution of product strategy, full product lifecycle management, customer journey digitalization, and leadership of the development team.',
                tags: ['Startup', 'Spring Cloud', 'Low-code', 'React', 'PostgreSQL'],
            },
            {
                period: '2019 - 2022',
                role: 'Enterprise architect',
                company: 'Bazelevs',
                description: 'Design and implementation of an enterprise project management system for film production based on Jira Server. Developed project management methodology, gathered and consolidated requirements, integrated with 1C, customized workflows using Groovy scripts, and conducted user training sessions.',
                tags: ['Jira','1C','MySQL','Groovy','BPMN 2.0'],
            },
            {
                period: '2017 - 2020',
                role: 'Architect',
                company: 'GOST-group',
                description: 'Architecture design for in-house and client solutions, development team management, and hands-on implementation in Java. Requirements gathering, system and business analysis, roadmap and backlog management, and creation of design artifacts',
                tags: ['Java','UML', 'ER', 'BPMN','GIS','PostgreSQL'],
            },
            {
                period: '2014 - 2017',
                role: 'Head of Development',
                company: 'IT Energy Service',
                description: 'Management of the company’s key projects: architecture and overall design, data model and functional module development, and definition of technical requirements for upcoming products.',
                tags: ['Java', 'ER', 'SAP BO','GIS','Oracle','B2G'],
            },
            {
                period: '2011 - 2014',
                role: 'Java teamlead',
                company: 'IT Energy Service',
                description: 'Team leadership and backend development. Technical design of architecture, data model, and interfaces. Requirements analysis, preparation of specifications and documentation',
                tags: ['Java', 'ER', 'ГИС','Oracle','Agile','JavaScript','PL/SQL'],
            },
        ],
        ru: [
            {
                period: '2024 - 2025',
                role: 'Системный архитектор',
                company: 'Solvo',
                description: 'Проектирование и реализация внутренней микросервисной платформы разработки продуктов',
                tags: ['Camunda', 'Spring Cloud', 'RabbitMQ','C4','REST','gRPC', 'PostgreSQL','MongoDB'],
            },
            {
                period: '2020 - 2023',
                role: 'Архитектор продукта',
                company: 'Галор',
                description: 'Проектирование продукта и архитектуры, моделирование БД и API. Разработка и реализация продуктовой стратегии, управление полным жизненным циклом продукта, цифровизация клиентских путей и руководство командой разработки.',
                tags: ['Стартап', 'Spring Cloud','C4', 'Low-code', 'React', 'PostgreSQL'],
            },
            {
                period: '2019 - 2022',
                role: 'Архитектор корпоративных систем',
                company: 'Bazelevs',
                description: 'Проектирование и внедрение корпоративной системы управления проектами кинопроизводства на базе Jira Server. Разработка методологии, сбор и консолидация требований, интеграция с 1С, кастомизация с использованием Groovy-скриптов и обучение пользователей.',
                tags: ['Jira','1C','MySQL','Groovy','BPMN 2.0'],
            },
            {
                period: '2017 - 2020',
                role: 'Архитектор',
                company: 'GOST-group',
                description: 'Проектирование архитектуры внутренних и заказных решений, управление командой разработки и участие в реализации (Java). Сбор требований, системный и бизнес-анализ, ведение базы знаний, архитектурных артефактов',
                tags: ['Java','UML', 'ER', 'BPMN','ГИС','PostgreSQL','Apache NiFi'],
            },
            {
                period: '2014 - 2017',
                role: 'Руководитель направления',
                company: 'АйТи Энерджи Сервис',
                description: 'Управление ключевыми проектами компании: проектирование архитектуры и интерфейсов, разработка модели данных и функциональных модулей, формирование технических требований к новым продуктам.',
                tags: ['Java', 'ER', 'SAP BO','Oracle','B2G'],
            },
            {
                period: '2011 - 2014',
                role: 'Тимлид Java',
                company: 'АйТи Энерджи Сервис',
                description: 'Руководство командой разработчиков. Backend-разработка, техническое проектирование архитектуры, модели данных и интерфейсов. Анализ требований, подготовка постановок и отчётной документации по ГОСТ 34.',
                tags: ['Java', 'ER', 'ГИС','Oracle','Agile','JavaScript','PL/SQL'],
            },
        ],
    };

    const education = {
        en: {
            title: 'Education',
            degree: 'Specialist Degree, Bioengineering and Bioinformatics',
            school: 'Lomonosov Moscow State University (MSU)',
            period: '2004 - 2011',
            description: 'Specialized in computational biology, bioinformatics algorithms, machine learning, and data processing. Strong foundation in mathematics, programming, and statistical analysis.',
        },
        ru: {
            title: 'Образование',
            degree: 'Специалист, Биоинженерия и биоинформатика',
            school: 'МГУ имени М.В. Ломоносова',
            period: '2004 - 2011',
            description: 'Специализация в вычислительной биологии, алгоритмах биоинформатики, машинном обучении и обработке данных. Сильная база в математике, программировании и статистическом анализе.',
        },
    };

    const currentSkills = language === 'en' ? skills.en : skills.ru;
    const currentExperience = language === 'en' ? experience.en : experience.ru;
    const currentEducation = language === 'en' ? education.en : education.ru;

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h1 className="text-4xl font-display font-bold mb-2">
                        {language === 'en' ? 'Curriculum Vitae' : 'Резюме'}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        {language === 'en' ? 'Lead Software Architect' : 'Ведущий архитектор ПО'}
                    </p>
                </div>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <a href="https://spb.hh.ru/resume/2dff6faeff0cde804d0039ed1f4b3074475038" target="_blank"
                       rel="noopener noreferrer" className="flex items-center">
                        <HHIcon/>
                        <span className="ml-2">{language === 'en' ? 'View on hh.ru' : 'Посмотреть на hh.ru'}</span>
                    </a>
                </Button>
            </div>

            {/* Skills */}
            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-primary-500">
                    {currentSkills.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {currentSkills.items.map((skill, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="text-primary-500 mt-1">{skill.icon}</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{skill.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{skill.desc}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-primary-500">
                    {language === 'en' ? 'Professional Experience' : 'Профессиональный опыт'}
                </h2>
                <div className="space-y-6">
                    {currentExperience.map((exp, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                <div>
                                    <h3 className="font-bold text-xl">{exp.role}</h3>
                                    <p className="text-primary-500">{exp.company}</p>
                                </div>
                                <span className="text-slate-600 dark:text-slate-400 text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-4" >{exp.description}
                            </p>
                            <TagList tags={exp.tags} className="mb-4"/>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-6 text-primary-500">
                    {currentEducation.title}
                </h2>
                <Card className="p-6">
                    <div className="flex items-start gap-4">
                        <HiAcademicCap className="w-8 h-8 text-primary-500 flex-shrink-0"/>
                        <div>
                            <h3 className="font-bold text-xl mb-1">{currentEducation.degree}</h3>
                            <p className="text-primary-500 mb-2">{currentEducation.school}</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                                {currentEducation.period}
                            </p>
                            <p className="text-slate-600 dark:text-slate-400">{currentEducation.description}</p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Contact CTA */}
            <Card className="p-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white border-0">
                <div className="text-center">
                    <h3 className="text-2xl font-display font-bold mb-4">
                        {language === 'en' ? 'Interested in working together?' : 'Заинтересованы в сотрудничестве?'}
                    </h3>
                    <p className="mb-6 opacity-90">
                        {language === 'en'
                            ? "Let's discuss how I can help your project succeed"
                            : 'Давайте обсудим, как я могу помочь вашему проекту'}
                    </p>
                    <Button variant="secondary" size="lg" asChild>
                        <a href="/contact">{language === 'en' ? 'Get in Touch' : 'Связаться'}</a>
                    </Button>
                </div>
            </Card>
        </div>
    );
}