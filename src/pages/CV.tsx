import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';
import { HiBriefcase, HiAcademicCap, HiCode, HiDatabase, HiUsers } from 'react-icons/hi';
import { Button } from '@/components/ui/Button';

const HHIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" className="inline-block">
    <g fillRule="nonzero" fillOpacity="1">
      <path d="M24 48c13.254 0 24-10.746 24-24S37.254 0 24 0 0 10.746 0 24s10.746 24 24 24zm0 0" fill="#ff0002"/>
      <path d="M35.676 20.46c-.727-.75-1.758-1.16-3.02-1.16-1.562 0-2.765.637-3.46 1.829v-5.91h-3.63v16.203h3.63v-5.695c0-1.329.273-2.18.683-2.68.394-.5.953-.692 1.555-.692.53 0 .953.168 1.246.477.297.316.465.805.465 1.484v7.094h3.632v-7.808c0-1.329-.386-2.407-1.101-3.141zM19.438 19.3c-1.567 0-2.77.637-3.461 1.829v-5.91h-3.63v16.203h3.63v-5.695c0-1.329.273-2.18.68-2.68.398-.5.956-.692 1.554-.692.535 0 .953.168 1.25.477.297.316.465.805.465 1.484v7.094h3.633v-7.808c0-1.329-.387-2.407-1.114-3.153-.715-.75-1.746-1.148-3.008-1.148zm0 0" fill="#fff"/>
    </g>
  </svg>
);

export function CV() {
  const { language } = useLanguage();

  const skills = {
    en: {
      title: 'Skills & Expertise',
      items: [
        { icon: <HiCode />, title: 'Programming Languages', desc: 'Java, JavaScript, TypeScript, Python, Go' },
        { icon: <HiDatabase />, title: 'Databases & Storage', desc: 'PostgreSQL, Oracle, MongoDB, Redis, Kafka, RabbitMQ' },
        { icon: <HiBriefcase />, title: 'Architecture & Tools', desc: 'Microservices, REST API, Docker, Kubernetes, BPM, BPMN 2.0' },
        { icon: <HiUsers />, title: 'Management & Leadership', desc: 'Team Lead, Product Management, Agile, Scrum' },
      ],
    },
    ru: {
      title: 'Навыки и экспертиза',
      items: [
        { icon: <HiCode />, title: 'Языки программирования', desc: 'Java, JavaScript, TypeScript, Python, Go' },
        { icon: <HiDatabase />, title: 'Базы данных и хранилища', desc: 'PostgreSQL, Oracle, MongoDB, Redis, Kafka, RabbitMQ' },
        { icon: <HiBriefcase />, title: 'Архитектура и инструменты', desc: 'Микросервисы, REST API, Docker, Kubernetes, BPM, BPMN 2.0' },
        { icon: <HiUsers />, title: 'Управление и лидерство', desc: 'Team Lead, Product Management, Agile, Scrum' },
      ],
    },
  };

  const experience = {
    en: [
      {
        period: '2020 - Present',
        role: 'Lead Software Architect / Product Manager',
        company: 'Ministry of Digital Development (МДО)',
        description: 'Leading architecture design for government digital platforms. Managing product development lifecycle. Coordinating cross-functional teams. Technologies: Java, Spring Boot, PostgreSQL, Kafka, Kubernetes, React.',
      },
      {
        period: '2017 - 2020',
        role: 'Head of Development Department',
        company: 'STC (System Technologies Corporation)',
        description: 'Led development department of 30+ engineers. Managed multiple government projects including integration platforms and BPM systems. Established development processes and quality standards. Technologies: Java, Oracle, BPMN 2.0, microservices.',
      },
      {
        period: '2013 - 2017',
        role: 'Team Lead / Senior Developer',
        company: 'NAUMEN',
        description: 'Led development team for enterprise BPM solutions. Designed and implemented complex business process automation systems. Mentored junior developers. Technologies: Java, JavaScript, PostgreSQL, BPM frameworks.',
      },
      {
        period: '2011 - 2013',
        role: 'Software Developer',
        company: 'Various Projects',
        description: 'Full-stack development for web applications. Database design and optimization. Implementation of REST APIs and integration solutions.',
      },
    ],
    ru: [
      {
        period: '2020 - Настоящее время',
        role: 'Ведущий архитектор ПО / Продакт-менеджер',
        company: 'Министерство цифрового развития (МДО)',
        description: 'Разработка архитектуры государственных цифровых платформ. Управление жизненным циклом продукта. Координация кросс-функциональных команд. Технологии: Java, Spring Boot, PostgreSQL, Kafka, Kubernetes, React.',
      },
      {
        period: '2017 - 2020',
        role: 'Руководитель департамента разработки',
        company: 'СТЦ (System Technologies Corporation)',
        description: 'Руководство департаментом разработки (30+ инженеров). Управление государственными проектами, включая интеграционные платформы и BPM-системы. Внедрение процессов разработки и стандартов качества. Технологии: Java, Oracle, BPMN 2.0, микросервисы.',
      },
      {
        period: '2013 - 2017',
        role: 'Team Lead / Senior Developer',
        company: 'NAUMEN',
        description: 'Руководство командой разработки корпоративных BPM-решений. Проектирование и реализация сложных систем автоматизации бизнес-процессов. Менторинг разработчиков. Технологии: Java, JavaScript, PostgreSQL, BPM-фреймворки.',
      },
      {
        period: '2011 - 2013',
        role: 'Разработчик ПО',
        company: 'Различные проекты',
        description: 'Full-stack разработка веб-приложений. Проектирование и оптимизация баз данных. Реализация REST API и интеграционных решений.',
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
          <a href="https://spb.hh.ru/resume/2dff6faeff0cde804d0039ed1f4b3074475038" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <HHIcon />
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
              <p className="text-slate-600 dark:text-slate-400">{exp.description}</p>
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
            <HiAcademicCap className="w-8 h-8 text-primary-500 flex-shrink-0" />
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