import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';
import { Download, Briefcase, GraduationCap, Code, Database, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CV() {
  const { language } = useLanguage();

  const skills = {
    en: {
      title: 'Skills & Expertise',
      items: [
        { icon: <Code />, title: 'Development', desc: 'Java, JavaScript, TypeScript, Python, React, Node.js' },
        { icon: <Database />, title: 'Databases', desc: 'PostgreSQL, Oracle, MongoDB' },
        { icon: <Users />, title: 'Management', desc: 'Team Lead, Project Management, Requirements Analysis' },
        { icon: <Briefcase />, title: 'Architecture', desc: 'Software Architecture, BPM, System Design' },
      ],
    },
    ru: {
      title: 'Навыки и экспертиза',
      items: [
        { icon: <Code />, title: 'Разработка', desc: 'Java, JavaScript, TypeScript, Python, React, Node.js' },
        { icon: <Database />, title: 'Базы данных', desc: 'PostgreSQL, Oracle, MongoDB' },
        { icon: <Users />, title: 'Управление', desc: 'Team Lead, управление проектами, анализ требований' },
        { icon: <Briefcase />, title: 'Архитектура', desc: 'Архитектура ПО, BPM, проектирование систем' },
      ],
    },
  };

  const experience = {
    en: [
      {
        period: '2020 - Present',
        role: 'Lead Software Architect',
        company: 'Various Projects',
        description: 'Designing enterprise systems, leading development teams, technical consultancy',
      },
      {
        period: '2015 - 2020',
        role: 'Department Head / Project Manager',
        company: 'IT Company',
        description: 'Managing government and commercial projects, team leadership',
      },
      {
        period: '2013 - 2015',
        role: 'Team Lead',
        company: 'Software Development',
        description: 'Leading development teams, architecture design',
      },
    ],
    ru: [
      {
        period: '2020 - Настоящее время',
        role: 'Ведущий архитектор ПО',
        company: 'Различные проекты',
        description: 'Проектирование корпоративных систем, руководство командами разработки, технический консалтинг',
      },
      {
        period: '2015 - 2020',
        role: 'Руководитель департамента / Проект-менеджер',
        company: 'ИТ-компания',
        description: 'Управление государственными и коммерческими проектами, руководство командами',
      },
      {
        period: '2013 - 2015',
        role: 'Team Lead',
        company: 'Разработка ПО',
        description: 'Руководство командами разработки, проектирование архитектуры',
      },
    ],
  };

  const education = {
    en: {
      title: 'Education',
      degree: 'Faculty of Bioengineering and Bioinformatics',
      school: 'Lomonosov Moscow State University',
      period: '2004 - 2011',
      description: 'Completed all academic requirements through 5th year. Specialized in data processing algorithms, machine learning, and neural networks.',
    },
    ru: {
      title: 'Образование',
      degree: 'Факультет биоинженерии и биоинформатики',
      school: 'МГУ имени М.В. Ломоносова',
      period: '2004 - 2011',
      description: 'Закончил все курсы до 5 курса включительно. Специализация в алгоритмах обработки данных, машинном обучении и нейронных сетях.',
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
        <Button>
          <Download className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Download PDF' : 'Скачать PDF'}
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
            <GraduationCap className="w-8 h-8 text-primary-500 flex-shrink-0" />
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