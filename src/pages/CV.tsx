import {
  HiAcademicCap,
  HiBriefcase,
  HiClipboardList,
  HiCode,
  HiDatabase,
  HiSparkles,
  HiUsers,
} from "react-icons/hi";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList.tsx";
import { useLanguage } from "@/hooks/useLanguage";

const HHIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 48 48"
    className="inline-block"
    aria-label="HeadHunter"
    role="img"
  >
    <g fillRule="nonzero" fillOpacity="1">
      <path
        d="M24 48c13.254 0 24-10.746 24-24S37.254 0 24 0 0 10.746 0 24s10.746 24 24 24zm0 0"
        fill="#ff0002"
      />
      <path
        d="M35.676 20.46c-.727-.75-1.758-1.16-3.02-1.16-1.562 0-2.765.637-3.46 1.829v-5.91h-3.63v16.203h3.63v-5.695c0-1.329.273-2.18.683-2.68.394-.5.953-.692 1.555-.692.53 0 .953.168 1.246.477.297.316.465.805.465 1.484v7.094h3.632v-7.808c0-1.329-.386-2.407-1.101-3.141zM19.438 19.3c-1.567 0-2.77.637-3.461 1.829v-5.91h-3.63v16.203h3.63v-5.695c0-1.329.273-2.18.68-2.68.398-.5.956-.692 1.554-.692.535 0 .953.168 1.25.477.297.316.465.805.465 1.484v7.094h3.633v-7.808c0-1.329-.387-2.407-1.114-3.153-.715-.75-1.746-1.148-3.008-1.148zm0 0"
        fill="#fff"
      />
    </g>
  </svg>
);

export function CV() {
  const { language } = useLanguage();

  const profile = {
    en: {
      text: "Technical leader who owns the whole vertical: the client conversation, requirements, architecture, breakdown and estimation, release planning, people, and code review. Fifteen years in industrial B2B/B2G systems: government, energy, logistics, fintech. Teams from 5 to 40 people. I am not the strongest engineer in the team and I don’t believe I have to be — I have always had people reporting to me who were stronger than me in their field. My job is to turn their strengths into a working system, delivered on time. And I write code today and intend to keep writing it.",
      formula:
        "15 years in IT · 14 years leading teams · 14 years hands-on in Java/Kotlin · 7 years of architecture · English C1",
      domainsTitle: "Expertise Across System Classes",
      domains: [
        "BPM",
        "MDM",
        "GIS",
        "ECM",
        "WMS/YMS",
        "Analytics & BI",
        "Low/No-code",
      ],
    },
    ru: {
      text: "Технический руководитель, который закрывает всю вертикаль: разговор с заказчиком, требования, архитектура, декомпозиция и оценка, планирование релизов, работа с людьми и код-ревью. Пятнадцать лет в промышленных B2B/B2G-системах: госсектор, энергетика, логистика, финтех. Команды от 5 до 40 человек. Я не самый сильный инженер в команде и не считаю, что должен им быть, — у меня всегда были подчинённые сильнее меня в своей области. Моё дело в том, чтобы из их сильных сторон собралась работающая система, сданная в срок. И я пишу код сегодня и хочу писать дальше.",
      formula:
        "15 лет в IT · 14 лет руководства командами · 14 лет разработки на Java/Kotlin · 7 лет архитектуры · английский C1",
      domainsTitle: "Экспертиза в классах систем",
      domains: [
        "BPM",
        "MDM",
        "GIS",
        "ECM",
        "WMS/YMS",
        "Аналитика и BI",
        "Low/No-code",
      ],
    },
  };

  const skills = {
    en: {
      title: "Skills & Expertise",
      items: [
        {
          icon: <HiUsers />,
          title: "People & Leadership",
          desc: "Hiring and onboarding, regular 1:1s, grades and development, mentoring, retention. Built teams from zero and transformed existing ones",
        },
        {
          icon: <HiClipboardList />,
          title: "Delivery & Planning",
          desc: "Breakdown, effort and schedule estimation together with the team, sprints and releases, backlog and roadmap, risks and escalation. Agile, Scrum, Kanban, Jira, Confluence",
        },
        {
          icon: <HiBriefcase />,
          title: "Client & Business",
          desc: "Direct work with the client and product owner, requirements management, acceptance and demos, presales. GOST 34, requirements traceability down to implementation",
        },
        {
          icon: <HiCode />,
          title: "Engineering & Stack",
          desc: "Java, Kotlin, Spring Boot/Cloud, microservices, REST and gRPC, Camunda 7/8, Flowable, BPMN, DDD. Code review, quality gates, GitLab CI/CD, Testcontainers, C4 and ADR",
        },
        {
          icon: <HiDatabase />,
          title: "Data & Infrastructure",
          desc: "PostgreSQL, Oracle, MongoDB, Redis, Kafka, RabbitMQ. Docker, Kubernetes, Prometheus, Grafana, ELK, OpenTelemetry",
        },
        {
          icon: <HiSparkles />,
          title: "AI Practice",
          desc: "LLM integration into business processes (ChatGPT, Claude, Gemini, local models), AI agents in Camunda 8, neural-network-based developer effort assessment",
        },
      ],
    },
    ru: {
      title: "Навыки и экспертиза",
      items: [
        {
          icon: <HiUsers />,
          title: "Люди и лидерство",
          desc: "Наём и онбординг, регулярные 1:1, грейды и развитие, менторинг, удержание. Собирал команды с нуля и трансформировал существующие",
        },
        {
          icon: <HiClipboardList />,
          title: "Delivery и планирование",
          desc: "Декомпозиция, оценка трудоёмкости и сроков вместе с командой, спринты и релизы, бэклог и roadmap, риски и эскалация. Agile, Scrum, Kanban, Jira, Confluence",
        },
        {
          icon: <HiBriefcase />,
          title: "Заказчик и бизнес",
          desc: "Прямая работа с заказчиком и product owner, управление требованиями, приёмка и демонстрации, пресейл. ГОСТ 34, трассируемость требований до реализации",
        },
        {
          icon: <HiCode />,
          title: "Инженерия и стек",
          desc: "Java, Kotlin, Spring Boot/Cloud, микросервисы, REST и gRPC, Camunda 7/8, Flowable, BPMN, DDD. Код-ревью, quality gates, GitLab CI/CD, Testcontainers, C4 и ADR",
        },
        {
          icon: <HiDatabase />,
          title: "Данные и инфраструктура",
          desc: "PostgreSQL, Oracle, MongoDB, Minio, Redis, Kafka, RabbitMQ. Docker, Kubernetes, Prometheus, Grafana, ELK, OpenTelemetry",
        },
        {
          icon: <HiSparkles />,
          title: "AI-практика",
          desc: "Интеграция LLM в бизнес-процессы (ChatGPT, Claude, Gemini, локальные модели), AI-агенты в Camunda 8, методика оценки трудозатрат разработчиков нейросетями",
        },
      ],
    },
  };

  const experience = {
    en: [
      {
        period: "2025 - present",
        role: "Tech Lead — technical project leader",
        company: "Independent practice",
        description:
          "Three parallel projects in three domains; in each one I own the result end to end, from the client conversation to the release. Loan origination pipeline for a fintech (Kotlin + Flowable 8): breakdown, effort and schedule estimation together with the team, backlog and release plan, code review, quality gates, and the application architecture designed from scratch around Flowable 8 with a 6.7→8 engine upgrade without stopping the business. Built and applied a methodology for assessing actual developer effort using neural networks — an objective basis both for planning and for the conversation about grades. AI automation of first-line support for an international booking service: BPMN processes with LLM agents on Camunda 8, in production rather than in a pilot. Corporate data lake: ETL from four business systems, Airflow, n8n, dashboards. Hands-on throughout — job workers, delegates, REST integrations, and the test layer on Testcontainers are mine.",
        tags: [
          "Flowable 8",
          "Camunda 8",
          "Kotlin",
          "LLM",
          "Airflow",
          "Testcontainers",
        ],
      },
      {
        period: "2024 - 2025",
        role: "Platform Architect / Technical Development Lead",
        company: "Solvo",
        description:
          "Technical lead of the platform track for the warehouse logistics product line (WMS/YMS): I set the standards the product teams worked by. Review and acceptance of the teams’ architecture and code decisions, service templates, SLAs between teams, API-first contracts (OpenAPI, code generation, Spectral). Wrote the reference services and shared libraries myself — a standard has to live in code, not in a presentation. Platform from scratch: 10+ microservices, bounded contexts, Kafka with Schema Registry, target NFRs (99.9% availability, p95 < 200 ms). Audit of 5 legacy systems and a Strangler Fig decomposition strategy without stopping the business. Regular architecture reviews with C-level on roadmap and tech debt priorities. Team of 10.",
        tags: ["Java/Kotlin", "Spring Cloud", "Kafka", "OpenAPI", "C4"],
      },
      {
        period: "2023 - 2024",
        role: "Technical Lead / Consulting Architect",
        company: "B2B/B2G custom development",
        description:
          "Custom web and BPM development for B2B/B2G. Led small teams: task definition, review, delivery to the client. Backend services on Java/Kotlin (Spring Boot/Cloud), business process automation on Camunda BPM (BPMN processes, job workers, delegates), integration design and implementation (REST, gRPC), target process design in BPMN 2.0, documentation: C4 model and process catalogues.",
        tags: ["Camunda", "Java/Kotlin", "BPMN 2.0", "gRPC", "C4"],
      },
      {
        period: "2020 - 2023",
        role: "CTO / CEO",
        company: "Galor",
        description:
          "Technical leader of a product startup founded with partners: the Soarse low-code platform, from MVP to production use in three federal agencies. Built the team from zero to 20 people — hiring, onboarding, regular 1:1s, development and training, flexible employment arrangements and a relocation programme. Set up the development process: code review, CI/CD, quality standards, release cycle. Product design: a platform of 5 builders (data, processes, interface, computation, API). Hands-on core development: an ABAC subsystem with a DSL for access policies, a view engine with JSON JOINs via an RDF store (Apache Jena). Presales and demos at department-director level in federal agencies, plus acceptance testing.",
        tags: ["Startup", "Spring Cloud", "Low-code", "React", "PostgreSQL"],
      },
      {
        period: "2019 - 2022",
        role: "Implementation Lead / Technical Analyst",
        company: "Bazelevs",
        description:
          "Implementation of BZDays, an enterprise project management system for film production based on Jira Server. Designed and rolled out the project management methodology: stages, roles, KPIs. Workflow modelling in BPMN: pre-production → production → post-production. Jira configuration and customisation: workflow schemes, permissions, Groovy scripts, plugin development, 1C integration. Requirements gathering: interviews with 30+ users — producers, management, the finance and legal departments — then consolidation and prioritisation. Training seminars: 4 groups of 10–15 people. Team of 5.",
        tags: ["Jira", "1C", "MySQL", "Groovy", "BPMN 2.0"],
      },
      {
        period: "2017 - 2020",
        role: "Project Manager / Architect",
        company: "GOST-group",
        description:
          "In-house product and custom B2G development. Full-cycle team and project management, from requirements gathering to production handover. Safe City for the EMERCOM directorate of the Sakhalin region — project manager in the classic sense: stage plan, deadlines, budget, risks, coordination of a distributed team of 15, direct work with the client and law-enforcement agencies. Delivered in 8 months under hard deadlines, 1,000+ cameras, emergency response time cut by 30%; the solution was later replicated in the Ryazan and Smolensk regions. Engineering and Energy Complex GIS for the St. Petersburg Energy Committee — system architect: team of 30, 28 months, 14 subsystems, report preparation time cut by 60%. Teams of 10 to 30 people.",
        tags: ["Java", "UML", "BPMN", "GIS", "PostgreSQL", "B2G"],
      },
      {
        period: "2014 - 2017",
        role: "Head of Development Division",
        company: "IT Energy Service",
        description:
          "Technical leadership of a portfolio of 3–5 parallel projects at once. Merger and transformation of a 35-person team (AS SIOI): I brought together the young team of the new phase and the “old guard” — programmers with 30+ years of experience who had built the first phase. Organised retraining from Excel VBA to Java, Oracle APEX and SAP BusinessObjects, and a mutual mentoring system between the generations. 97% of the team retained: one person left, for retirement. MDO Portal for the Ministry of Energy — 15,000+ energy facilities, data analysis time cut by 40%, ML-based failure prediction, Best IT Project in Fuel & Energy 2016. Teams of 15 to 40 people.",
        tags: ["Java", "SAP BO", "Oracle", "ML", "B2G"],
      },
      {
        period: "2011 - 2014",
        role: "Java Team Lead / Project Manager",
        company: "IT Energy Service",
        description:
          "Investment Program Monitoring Portal for the Ministry of Energy — project manager: budget and schedule planning, assembling a team of 10, work with the client, quality control. Delivered in 8 months. Development team leadership, code review, task definition. Backend development in Java, Oracle (PL/SQL), technical design of architecture, data model and interfaces. Requirements analysis and reporting documentation to GOST 34. Teams of 5 to 10 people.",
        tags: ["Java", "Oracle", "PL/SQL", "GIS", "Agile", "B2G"],
      },
    ],
    ru: [
      {
        period: "2025 - н. в.",
        role: "Tech Lead — технический руководитель проектов",
        company: "Независимая практика",
        description:
          "Три параллельных проекта в трёх доменах; в каждом отвечаю за результат целиком — от разговора с заказчиком до релиза. Кредитный конвейер для финтеха (Kotlin + Flowable 8): декомпозиция, оценка трудоёмкости и сроков вместе с командой, бэклог и релизный план, код-ревью, quality gates, архитектура приложения с нуля вокруг Flowable 8 и мажорный апгрейд движка с 6.7 без остановки бизнеса. Разработал и внедрил методику оценки фактических трудозатрат разработчиков с применением нейросетей — объективная база и для планирования, и для разговора о грейдах. AI-автоматизация первой линии поддержки международного сервиса бронирования: BPMN-процессы с LLM-агентами на Camunda 8, в промышленной эксплуатации, а не в пилоте. Корпоративное хранилище данных: ETL из четырёх бизнес-систем, Airflow, n8n, дашборды. Hands-on во всех трёх: Job Workers, делегаты, REST-интеграции и слой автотестов на Testcontainers пишу сам.",
        tags: [
          "Flowable 8",
          "Camunda 8",
          "Kotlin",
          "LLM",
          "Airflow",
          "Testcontainers",
        ],
      },
      {
        period: "2024 - 2025",
        role: "Архитектор платформы / технический лидер разработки",
        company: "Solvo",
        description:
          "Технический лидер платформенного направления продуктовой линейки складской логистики (WMS/YMS): задавал стандарты, по которым работали продуктовые команды. Ревью и приёмка архитектурных и кодовых решений команд, шаблоны сервисов, SLA между командами, API-first контракты (OpenAPI, кодогенерация, Spectral). Референсные сервисы и общие библиотеки писал лично — стандарт должен жить в коде, а не в презентации. Платформа с нуля: 10+ микросервисов, bounded contexts, Kafka со Schema Registry, целевые NFR (доступность 99.9%, p95 < 200 мс). Аудит 5 legacy-систем и стратегия декомпозиции монолитов по Strangler Fig без остановки бизнеса. Регулярные архитектурные ревью с C-level: roadmap и приоритизация техдолга. Команда 10 человек.",
        tags: [
          "Java/Kotlin",
          "Spring Cloud",
          "Kafka",
          "OpenAPI",
          "C4",
          "PostgreSQL",
        ],
      },
      {
        period: "2023 - 2024",
        role: "Технический лидер / архитектор-консультант",
        company: "Заказная разработка B2B/B2G",
        description:
          "Заказная разработка WEB- и BPM-решений для B2B/B2G. Вёл небольшие команды: постановка задач, ревью, сдача заказчику. Backend-сервисы на Java/Kotlin (Spring Boot/Cloud), автоматизация бизнес-процессов на Camunda BPM (BPMN-процессы, Job Workers, делегаты), проектирование и реализация интеграций (REST, gRPC), проектирование целевых процессов в BPMN 2.0, документирование: C4-модель и каталоги процессов.",
        tags: ["Camunda", "Java/Kotlin", "BPMN 2.0", "gRPC", "C4"],
      },
      {
        period: "2020 - 2023",
        role: "Технический директор (CTO) / генеральный директор",
        company: "Галор",
        description:
          "Технический руководитель продуктового стартапа, основанного с партнёрами: Low-Code платформа Soarse, от MVP до промышленной эксплуатации в трёх федеральных ведомствах. Собрали команду с нуля до 20 человек — наём, онбординг, регулярные 1:1, развитие и обучение, гибкие форматы занятости и программа релокации. Организация процессов разработки: код-ревью, CI/CD, стандарты качества, релизный цикл. Проектирование продукта: платформа из 5 конструкторов (данные, процессы, интерфейс, вычисления, API). Hands-on разработка ядра: собственная ABAC-подсистема с DSL для политик доступа, движок представлений с JOIN по JSON через RDF-хранилище (Apache Jena). Пресейлы и показы на уровне директоров департаментов федеральных ведомств, приёмо-сдаточные испытания.",
        tags: [
          "Стартап",
          "Spring Cloud",
          "C4",
          "Low-code",
          "React",
          "PostgreSQL",
        ],
      },
      {
        period: "2019 - 2022",
        role: "Руководитель внедрения / технический аналитик",
        company: "Bazelevs",
        description:
          "Внедрение корпоративной системы управления проектами кинопроизводства BZDays на базе Jira Server. Спроектировал и внедрил методологию управления проектами: стадии, роли, KPI. Моделирование workflow-процессов в BPMN: pre-production → production → post-production. Настройка и кастомизация Jira: схемы workflow, права, Groovy-скрипты, разработка плагинов, интеграция с 1С. Сбор требований: интервью с 30+ пользователями — продюсеры, руководство, финансовый и юридический отделы, — консолидация и приоритизация. Обучающие семинары: 4 группы по 10–15 человек. Команда 5 человек.",
        tags: ["Jira", "1C", "MySQL", "Groovy", "BPMN 2.0"],
      },
      {
        period: "2017 - 2020",
        role: "Руководитель проектов / архитектор",
        company: "GOST-group",
        description:
          "Внутренний продукт и заказная разработка для B2G. Управление командами разработки и проектами полного цикла, от сбора требований до сдачи в эксплуатацию. АПК «Безопасный город» для ГУ МЧС по Сахалинской области — руководитель проекта в классическом смысле: план этапов, сроки, бюджет, риски, координация распределённой команды 15 человек, прямая работа с заказчиком и силовыми ведомствами. Сдан за 8 месяцев в жёстких сроках, 1000+ камер, время реагирования экстренных служб сокращено на 30%; решение затем тиражировано на Рязанскую и Смоленскую области. ГИС «Инженерно-энергетический комплекс Санкт-Петербурга» для Комитета по энергетике — архитектор системы: команда 30 человек, 28 месяцев, 14 подсистем, время подготовки аналитических отчётов сокращено на 60%. Команды 10–30 человек.",
        tags: ["Java", "UML", "BPMN", "ГИС", "PostgreSQL", "B2G"],
      },
      {
        period: "2014 - 2017",
        role: "Руководитель направления разработки",
        company: "АйТи Энерджи Сервис",
        description:
          "Техническое руководство портфелем из 3–5 параллельных проектов одновременно. Слияние и трансформация команды 35 человек (АС СиОИ): объединил молодую команду новой очереди и «старую гвардию» — программистов со стажем 30+ лет, работавших на первой очереди. Организовал переобучение с Excel VBA на Java, Oracle APEX и SAP BusinessObjects и систему взаимного наставничества между поколениями. Сохранили 97% команды: ушёл один человек, на пенсию. Портал МДО для Минэнерго России — 15 000+ энергообъектов, время анализа данных сокращено на 40%, ML-прогноз аварийности, «Лучший ИТ-проект в ТЭК» 2016. Команды 15–40 человек.",
        tags: ["Java", "SAP BO", "Oracle", "ML", "B2G"],
      },
      {
        period: "2011 - 2014",
        role: "Тимлид Java / руководитель проекта",
        company: "АйТи Энерджи Сервис",
        description:
          "Портал мониторинга инвестиционных программ для Минэнерго России — руководитель проекта: планирование бюджета и сроков, формирование команды 10 человек, работа с заказчиком, контроль качества. Сдан за 8 месяцев. Руководство командой разработчиков, код-ревью, постановки на разработку. Backend-разработка на Java, Oracle (PL/SQL), техническое проектирование архитектуры, модели данных и интерфейсов. Анализ требований и отчётная документация по ГОСТ 34. Команды 5–10 человек.",
        tags: ["Java", "Oracle", "PL/SQL", "ГИС", "Agile", "B2G"],
      },
    ],
  };

  const education = {
    en: {
      title: "Education",
      degree: "Specialist Degree, Bioengineering and Bioinformatics",
      school: "Lomonosov Moscow State University (MSU)",
      period: "2004 - 2011",
      description:
        "Specialized in computational biology, bioinformatics algorithms, machine learning, and data processing. Strong foundation in mathematics, programming, and statistical analysis.",
    },
    ru: {
      title: "Образование",
      degree: "Специалист, Биоинженерия и биоинформатика",
      school: "МГУ имени М.В. Ломоносова",
      period: "2004 - 2011",
      description:
        "Специализация в вычислительной биологии, алгоритмах биоинформатики, машинном обучении и обработке данных. Сильная база в математике, программировании и статистическом анализе.",
    },
  };

  const currentProfile = language === "en" ? profile.en : profile.ru;
  const currentSkills = language === "en" ? skills.en : skills.ru;
  const currentExperience = language === "en" ? experience.en : experience.ru;
  const currentEducation = language === "en" ? education.en : education.ru;

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <SEO
            title={
              language === "en"
                ? "CV — Ivan Donchenko"
                : "Резюме — Иван Донченко"
            }
            description={
              language === "en"
                ? "15 years in IT, 14 leading teams: development management, delivery and estimation, architecture, code review, BPM (Camunda/Flowable), Java/Kotlin. From government to fintech."
                : "15 лет в IT, 14 лет руководства командами: управление разработкой, delivery и оценка сроков, архитектура, код-ревью, BPM (Camunda/Flowable), Java/Kotlin. От Минэнерго до финтеха."
            }
          />
          <h1 className="text-4xl font-display font-bold mb-2">
            {language === "en" ? "Curriculum Vitae" : "Резюме"}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            {language === "en"
              ? "Head of Development · Full-cycle technical leader · Teams from 5 to 40 people"
              : "Лидер разработки · Технический руководитель полного цикла · Команды от 5 до 40 человек"}
          </p>
        </div>
        <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
          <a
            href="https://spb.hh.ru/resume/32ac5478ff0fc1f7e30039ed1f4d71624c3742"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <HHIcon />
            <span className="ml-2">
              {language === "en" ? "View on hh.ru" : "Посмотреть на hh.ru"}
            </span>
          </a>
        </Button>
      </div>

      {/* Profile */}
      <section className="mb-12">
        <Card className="p-6">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            {currentProfile.text}
          </p>
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
            {currentProfile.formula}
          </p>
          <h3 className="font-bold text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
            {currentProfile.domainsTitle}
          </h3>
          <TagList tags={currentProfile.domains} size="sm" />
        </Card>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-display font-bold mb-6 text-primary-500">
          {currentSkills.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {currentSkills.items.map((skill) => (
            <Card key={skill.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary-500 mt-1">{skill.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{skill.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-display font-bold mb-6 text-primary-500">
          {language === "en"
            ? "Professional Experience"
            : "Профессиональный опыт"}
        </h2>
        <div className="space-y-6">
          {currentExperience.map((exp) => (
            <Card key={exp.period} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="font-bold text-xl">{exp.role}</h3>
                  <p className="text-primary-500">{exp.company}</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {exp.description}
              </p>
              <TagList tags={exp.tags} className="mb-4" />
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
            <HiAcademicCap className="w-8 h-8 text-primary-500 shrink-0" />
            <div>
              <h3 className="font-bold text-xl mb-1">
                {currentEducation.degree}
              </h3>
              <p className="text-primary-500 mb-2">{currentEducation.school}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                {currentEducation.period}
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {currentEducation.description}
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Contact CTA */}
      <Card className="p-8 bg-linear-to-r from-primary-500 to-primary-600 text-white border-0">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            {language === "en"
              ? "Looking for a head of development?"
              : "Ищете руководителя разработки?"}
          </h3>
          <p className="mb-6 opacity-90">
            {language === "en"
              ? "Describe the team and the task — I reply within 24 hours"
              : "Опишите команду и задачу — отвечаю в течение 24 часов"}
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">
              {language === "en" ? "Get in Touch" : "Связаться"}
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
