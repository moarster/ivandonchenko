import {
  HiAcademicCap,
  HiBriefcase,
  HiClipboardList,
  HiCode,
  HiCube,
  HiDatabase,
  HiShieldCheck,
  HiTemplate,
  HiUsers,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList.tsx";
import { useLanguage } from "@/hooks/useLanguage";
import { pageMeta } from "@/utils/seo";

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

interface ExperienceProject {
  name: string;
  period?: string;
  intro?: string;
  bullets: string[];
  stack?: string;
}

interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  note?: string;
  intro?: string;
  bullets?: string[];
  projects?: ExperienceProject[];
  team?: string;
  tags: string[];
}

export function CV() {
  const { language, localePath } = useLanguage();

  const profile = {
    en: {
      paragraphs: [
        "It so happened that in my very first year at my very first job I was handed management responsibilities: over tasks, requirements, the project. I was good at it, and the first half of my career went towards more management and less development, until on the Sakhalin project I became almost purely a project manager... and decided that life without an engineering component was not for me. Since then I have been splitting myself between management and development.",
        "As a boss, I aim to build a dream team where everyone works with pleasure and with a sense of solidarity, in a friendly and non-toxic atmosphere. But I will not let rude people and slackers off the hook.",
        "As a mentor, I am always glad to share experience, to teach people to think differently and to help analysts and developers cope with their tasks.",
        "As a techie, I have vivid abstract thinking and the ability to see a system both at the level of the overall landscape and in its individual components. I will not become a top-tier senior developer, but I will keep the development process running at any stage of delivery. My talent as a developer, where I am especially good, is creating shared libraries and starters: an exceptional ability to solve problems in their general form.",
        "As a methodologist, I will optimise internal processes, put the information flows between teams in order, implement corporate integrations myself and introduce effective tools.",
        "As a manager, I understand the trade-off between doing it beautifully and correctly and doing it on time and on budget. I mitigate circumstances, risks, commitments and opportunities.",
        "As a representative of the company, I will find common ground with any customer, both in terms of level and of character. I am a good speaker, I have presentation skills and, why hide it, charisma. The experience varies: from a report to the Minister of Energy to defending a product from the podium at the Prosecutor General's Office.",
      ],
      domainsTitle: "Expertise Across System Classes",
      domains: ["BPM", "MDM", "GIS", "WMS/YMS", "DWH & BI", "Low/No-code"],
    },
    ru: {
      paragraphs: [
        "Так вышло, что уже в первый год на первом месте работы мне выдали обязанности управления: задачами, требованиями, проектом. Мне это удавалось, и первая половина карьеры шла в сторону расширения менеджмента и уменьшения разработки, пока на сахалинском проекте я не стал почти исключительно РП... и решил, что без инженерной составляющей мне жизнь не мила. С тех пор распределяю себя как на менеджмент, так и на разработку.",
        "Как начальник, стремлюсь создать дрим-тим, в котором все работают с удовольствием и с чувством локтя, в доброжелательной и нетоксичной атмосфере. Но хамам и бездельникам спуску не дам.",
        "Как ментор, всегда рад поделиться опытом, научить думать «иначе» и помочь аналитикам и разработчикам справиться с задачами.",
        "Как технарь, обладаю ярким абстрактным мышлением, умением видеть систему и на уровне общего ландшафта, и в отдельных компонентах. Не стану топовым сеньором, но обеспечу процесс разработки на любом этапе delivery. Талант разработчика, где я особенно хорош, — создание общих библиотек и стартеров, исключительная способность решать задачи в общем виде.",
        "Как методолог, оптимизирую внутренние процессы, наведу порядок в информационных потоках между командами, сам реализую корпоративные интеграции и внедрю эффективные инструменты.",
        "Как менеджер, понимаю компромисс между «сделать красиво и правильно» и «сделать в срок и в бюджет». Митигирую обстоятельства, риски, обязательства и возможности.",
        "Как представитель компании, найду общий язык с любым заказчиком — и по уровню, и по характеру. Хорошо подвешен язык, есть навыки презентации и, что уж скрывать, харизма. Опыт разный: от доклада министру энергетики до защиты продукта с трибуны в Генеральной прокуратуре.",
      ],
      domainsTitle: "Экспертиза в классах систем",
      domains: ["BPM", "MDM", "ГИС", "WMS/YMS", "DWH и BI", "Low/No-code"],
    },
  };

  const skills = {
    en: {
      title: "Key Skills",
      groups: [
        {
          icon: <HiClipboardList />,
          title: "Leadership & Delivery",
          tags: [
            "Team Lead",
            "SAFe",
            "Agile",
            "Scrum",
            "Kanban",
            "Sprint and release planning",
            "Effort estimation",
            "Roadmap",
          ],
        },
        {
          icon: <HiUsers />,
          title: "People",
          tags: [
            "Hiring and onboarding",
            "1:1",
            "Mentoring",
            "Training",
            "Grading and performance review",
            "Code Review",
          ],
        },
        {
          icon: <HiBriefcase />,
          title: "Customers & Requirements",
          tags: [
            "Requirements management",
            "Work with customers",
            "Presales",
            "Jira",
            "ScriptRunner",
            "Confluence",
            "Notion",
            "GOST 34",
            "SMEV",
            "ESIA",
          ],
        },
        {
          icon: <HiCode />,
          title: "Development",
          tags: [
            "Java",
            "Kotlin",
            "Spring Boot",
            "Spring Cloud",
            "Microservices",
            "REST API",
            "OpenAPI",
            "API-first",
          ],
        },
        {
          icon: <HiTemplate />,
          title: "BPM & Low-code",
          tags: [
            "Camunda",
            "Flowable",
            "BPMN",
            "DMN",
            "FEEL",
            "Job Workers",
            "Low-code",
            "LLM agents",
          ],
        },
        {
          icon: <HiDatabase />,
          title: "Data",
          tags: [
            "PostgreSQL",
            "PL/SQL",
            "MongoDB",
            "Apache Kafka",
            "ETL",
            "n8n",
            "DWH",
            "Master Data Management",
            "RDF",
            "BI",
          ],
        },
        {
          icon: <HiCube />,
          title: "Design & Documentation",
          tags: [
            "DDD",
            "Event-Driven Architecture",
            "C4 model",
            "Structurizr",
            "ADR",
            "UML",
          ],
        },
        {
          icon: <HiShieldCheck />,
          title: "Infrastructure & Quality",
          tags: [
            "Docker",
            "GitLab CI/CD",
            "Testcontainers",
            "JUnit",
            "Grafana",
            "ELK",
            "Keycloak",
            "OAuth2",
          ],
        },
      ],
    },
    ru: {
      title: "Ключевые навыки",
      groups: [
        {
          icon: <HiClipboardList />,
          title: "Руководство и delivery",
          tags: [
            "Team Lead",
            "Управление проектами",
            "SAFe",
            "Agile",
            "Scrum",
            "Kanban",
            "Спринты и релизы",
            "Оценка трудоёмкости",
            "Roadmap",
          ],
        },
        {
          icon: <HiUsers />,
          title: "Люди",
          tags: [
            "Наём и адаптация персонала",
            "1:1",
            "Менторинг",
            "Обучение",
            "Грейды и оценка",
            "Code Review",
          ],
        },
        {
          icon: <HiBriefcase />,
          title: "Заказчик и требования",
          tags: [
            "Управление требованиями",
            "Работа с заказчиком",
            "Пресейл",
            "Jira",
            "ScriptRunner",
            "Confluence",
            "Notion",
            "ГОСТ 34",
            "СМЭВ",
          ],
        },
        {
          icon: <HiCode />,
          title: "Разработка",
          tags: [
            "Java",
            "Kotlin",
            "Spring Boot",
            "Spring Cloud",
            "Микросервисы",
            "REST API",
            "OpenAPI",
            "API-first",
          ],
        },
        {
          icon: <HiTemplate />,
          title: "BPM и Low-code",
          tags: [
            "Camunda",
            "Flowable",
            "BPMN",
            "DMN",
            "FEEL",
            "Job Workers",
            "Low-code",
            "LLM-агенты",
          ],
        },
        {
          icon: <HiDatabase />,
          title: "Данные",
          tags: [
            "PostgreSQL",
            "PL/SQL",
            "MongoDB",
            "Apache Kafka",
            "ETL",
            "n8n",
            "DWH",
            "Master Data Management",
            "Apache Jena",
          ],
        },
        {
          icon: <HiCube />,
          title: "Проектирование и документирование",
          tags: [
            "DDD",
            "Event-Driven Architecture",
            "C4 model",
            "Structurizr",
            "ADR",
            "UML",
          ],
        },
        {
          icon: <HiShieldCheck />,
          title: "Инфраструктура и качество",
          tags: [
            "Docker",
            "GitLab CI/CD",
            "Testcontainers",
            "JUnit",
            "Grafana",
            "ELK",
            "Keycloak",
            "OAuth2",
          ],
        },
      ],
    },
  };

  const experience: Record<"en" | "ru", ExperienceEntry[]> = {
    en: [
      {
        period: "October 2025 - June 2026",
        role: "Tech Lead / technical project lead",
        company: "Independent practice",
        projects: [
          {
            name: "BrainySoft - BPM core of a lending pipeline (fintech)",
            period: "March - June 2026",
            intro:
              "The task was to organise the development of a BPM engine based on Flowable. What I managed to get done:",
            bullets: [
              "Dependency migration: Java 17->25 | Kotlin 1.6->2.4 | Spring Boot 2.7->4.1 | Flowable 6.8->8.0",
              "Refactoring of the application architecture through design (C4, Structurizr), documentation (knowledge base, ADR) and implementation. Creation of a unique three-ring component pattern around the Flowable core",
              "Move to API-first. Introduction of REST API design practice (OpenAPI 3.1) from the consumer's point of view (developer experience), code generation (openapi-generator) of models and interfaces, a mechanism for seamlessly joining hand-written and generated code",
              "Integration testing platform across several tracks: services, processes (BPMN E2E), security (threat models), observability (tracing). Spring Boot Test + Testcontainers",
              "Requirements analysis: decomposition and estimation, release plan, tech debt prioritisation, daily work with developers, analysts and testers",
              "Low-code BPMN constructor: YAML descriptors of domain palette elements - metadata, configuration form schema, rules for writing to BPMN-XML",
              "A custom forms engine inspired by form-js, with injection of process variables and evaluation of Camunda FEEL expressions",
              "Move from basic auth to OIDC/JWKS, Spring Security on Keycloak",
              "Spring AOP for uniform spans",
              "Chose the BI platform for the analytics component: assembled a throwaway PoC with Superset and Metabase connected in parallel, compared them on functionality and UI, justified the final choice",
              "Introduced engineering practices: integration testing, codebase standards, quality gates. Multi-stage CI/CD in GitLab: static checks, ktlint and detekt, custom Spectral linter rules for contracts, build, auto-deploy",
              "Mentoring: code review as teaching, walkthroughs of architectural decisions, onboarding into the domain",
              "Developed a pipeline for automatic estimation of developers' actual effort: Jira and GitLab integration, an AI agent evaluates weekly git-diffs by commit, normalisation of hours across commits, mapping onto Jira issues, filling in Jira Timesheets. Only the approval is manual",
            ],
            stack:
              "Final stack: Kotlin 2.4 / Java 25, Gradle 9.4, Spring Boot 4.1 and Spring Cloud 2025.1 (OpenFeign, LoadBalancer); Flowable 8, PostgreSQL, Liquibase; Spring Kafka, Confluent Schema Registry; OpenAPI 3.1, Keycloak (OIDC/JWKS, Spring Security), Groovy 5, Camunda FEEL Engine; OpenTelemetry, Micrometer (Prometheus and OTLP registry), distributed tracing, Logstash Logback; JUnit 5, Mockito-Kotlin, Testcontainers, Spring Boot Test; KtLint and detekt; Docker Compose, Traefik, nginx",
          },
          {
            name: "Corestone - corporate data warehouse and analytics",
            period: "November 2025 - March 2026",
            bullets: [
              "Migration from Yandex DataLens to Grafana (dozens of dashboards, hundreds of dynamic panels)",
              "Three-layer warehouse on PostgreSQL following the Stage / Core / Mart model: raw data, normalised core, business data marts",
              "Data collection from Bitrix24, Plan-Fact and CallTouch. ETL on n8n, transformations in PL/pgSQL",
              "In-depth analysis of primary leads: reconstruction of the marketing chain by UTM tags from source to deal, reconciliation of advertising costs against revenue",
              "Training employees to work in Grafana",
            ],
          },
          {
            name: "ostrovok.ru - AI automation of first-line support",
            period: "October - December 2025",
            bullets: [
              "Camunda 8 (Zeebe): orchestration of LLM agents (workers) in ticket handling processes",
              "Wrote the BPMN Design Convention Guide - a process modelling standard",
              "Non-standard technical BPMN processes: a Kafka message router, an LRA cache of available agents",
              "Composite DMN made of chained tables, supporting complex multilingual question-answer combinations",
            ],
          },
        ],
        tags: [
          "Flowable 8",
          "Camunda 8",
          "Kotlin",
          "Spring Boot 4",
          "LLM agents",
          "Testcontainers",
          "n8n",
          "Grafana",
        ],
      },
      {
        period: "April 2024 - September 2025",
        role: "Systems Architect",
        company: "Solvo",
        companyUrl: "https://www.solvo.ru",
        intro:
          "The main task was to introduce modern approaches to software design and development into the company's product line. The PoC was the Carrier Portal, a system for finding contractors and running tenders for cargo transportation requests.",
        bullets: [
          "Managing a team of developers and analysts: maintaining the backlog and roadmap, decomposition and estimation, distribution of work, acceptance of results",
          "Mentoring and training: walkthroughs of architectural and code decisions with the team",
          "Product architecture in the C4 model at all levels, taking the overall product landscape into account: a microservice platform with Camunda 8 as the orchestrator",
          "Development of shared platform libraries that speed up extending the domain with new areas: data models for services and workers, an adapter from a search JSON API to JPA, Spring Boot starters with autoconfiguration",
          "Spring Cloud Gateway on a reactive stack, complex REST->gRPC routing, OAuth2 client and resource server on top of Keycloak, sessions in Redis",
          "Infrastructure: Docker Swarm, Nexus 3, Keycloak, Consul, PostgreSQL, MongoDB, Redis, Elasticsearch, ActiveMQ, Nginx, Zipkin",
          "Presenting and defending the results at the architecture committee",
        ],
        tags: [
          "Java/Kotlin",
          "Spring Cloud Gateway",
          "Camunda 8",
          "C4",
          "Keycloak",
          "MongoDB",
        ],
      },
      {
        period: "November 2023 - March 2024",
        role: "Architect / Java developer",
        company: "Independent practice",
        projects: [
          {
            name: "Hunting Administration platform (B2G)",
            bullets: [
              "Design and development of the hunting licence lifecycle service",
              "Integration via SMEV 3",
              "Process orchestration on Camunda 7: External Task, Job Workers",
              "C4 model in Structurizr, API documentation, deployed prototype",
            ],
          },
        ],
        tags: ["Camunda 7", "SMEV 3", "Java", "Structurizr"],
      },
      {
        period: "July 2020 - January 2023",
        role: "CEO / CPO",
        company: "GALOR LLC",
        companyUrl: "https://soarse.com",
        intro:
          "Head of a product startup founded with partners: the Soarse low-code platform, from MVP to production use in three federal agencies.",
        bullets: [
          "We grew the team from zero to 20 people, Harzburg management model",
          "Introduced SAFe, meticulously adapted to the size of the company, and the RACI responsibility matrix",
          "A knowledge base of hundreds of articles, from internal standards and product analytics to development specifications and technical documentation",
          "Design of the product's business architecture: a metamodel and 11 components - data, files, access, interface, computation, processes, relations and ontologies, catalogue tree, validation, asynchronous tasks",
          "Microservice architecture: Java, Spring Boot and Spring Cloud, Spring Cloud Gateway, PostgreSQL, Redis, RabbitMQ, Consul, Nginx; frontend - React and TypeScript",
          "Semantic Web technologies: RDF store (Apache Jena, TDB, Fuseki, SPARQL, OWL), semantic search",
          "Presales, demos and presentations at the level of department directors of federal agencies, acceptance testing",
          "State Legal Statistics System (Prosecutor General's Office of the Russian Federation) - master data and metadata component",
          "Information system of the Russian Football Union",
          "Timber and timber transactions accounting system (Federal Forestry Agency)",
        ],
        team: "Team - 20 people",
        tags: [
          "Low-code",
          "Spring Cloud",
          "React",
          "PostgreSQL",
          "Apache Jena",
          "SAFe",
        ],
      },
      {
        period: "July 2019 - January 2022",
        role: "Methodology consultant",
        company: "Bazelevs",
        companyUrl: "https://www.bazelevs.ru",
        note: "Part-time alongside my main job",
        intro:
          "Rollout of BZDays, a corporate project management system for film production based on Jira Server.",
        bullets: [
          "Designed and implemented the project management methodology as a multi-level tree of stages and tasks (Jira Structure)",
          "ScriptRunner: dynamic configuration of interfaces and fields, form behaviour, validations, transition handlers, scripted jobs, REST endpoints, integrations with external systems",
          "Jira customisation: workflow schemes, permissions, plugin development, integration with 1C",
          "Requirements gathering: interviews with 30+ users - producers, management, finance and legal departments from three countries (Russia, Kazakhstan, USA)",
          "Training seminars: 4 groups of 10-15 people",
        ],
        tags: ["Jira", "ScriptRunner", "Groovy", "1C", "BPMN"],
      },
      {
        period: "March 2017 - June 2020",
        role: "Project manager / architect",
        company: "GOST Group",
        companyUrl: "https://www.gost-group.com",
        intro:
          "Custom development for B2G and an internal product. Managing full-cycle teams and projects, from requirements gathering to handover into operation.",
        bullets: [
          "Safe City hardware and software complex (EMERCOM Main Directorate for the Sakhalin Region) - project manager in the classic sense: stage plan, deadlines, budget, risks, coordination of a distributed team of 15 people, direct work with the customer and with law enforcement agencies. Delivered in 8 months against tight deadlines, the solution was later replicated to the Ryazan and Smolensk regions",
          "Engineering and Energy Complex of Saint Petersburg GIS (Saint Petersburg Energy Committee) - system architect: a team of 30 people, 28 months, 14 subsystems. A cluster of 4 geoservers with load balancing, sticky sessions and fail-over, PostGIS, work with geodata and projections",
          "Reporting IS. Fuel and Energy Complex GIS (Lukoil PJSC)",
          "Managing the development team, code review, traceability of requirements down to implementation, training the customer's users",
          "Design artefacts (UML, ER, BPMN, C4), backend in Java (Spring), database design (PostgreSQL, Oracle), a full set of documentation to GOST 34",
        ],
        team: "Team - 10-30 people",
        tags: ["Java", "Spring", "PostgreSQL", "GIS", "UML", "GOST 34"],
      },
      {
        period: "September 2014 - February 2017",
        role: "Head of development",
        company: "IT Energy Service",
        companyUrl: "https://www.it-energy.ru",
        intro:
          "Technical leadership of analysis, development and key projects.",
        bullets: [
          "Merger and transformation of a 35-person team (AS SiOI): I brought together the young team of the new phase and the old guard - programmers with 30+ years of experience. Organised retraining from Excel VBA to Java, Oracle APEX and SAP BusinessObjects, and a system of mutual mentoring between the generations",
          "MDO Portal (Ministry of Energy of Russia) - monitoring of operating power industry facilities. Best IT project in the fuel and energy sector 2016",
          "Electricity metering system for cross-border power lines (Rosseti PJSC)",
          "Design of architecture, interfaces and the data model, master data component; backend in Java, Oracle and PL/SQL",
        ],
        team: "Team - 15-40 people",
        tags: ["Java", "Oracle", "SAP BO", "Oracle APEX", "B2G"],
      },
      {
        period: "June 2011 - August 2014",
        role: "Java team lead / project manager",
        company: "IT Energy Service",
        companyUrl: "https://www.it-energy.ru",
        bullets: [
          "Investment programme monitoring portal (Ministry of Energy of Russia) - project manager: budget and schedule planning, forming a team of 10 people, work with the customer, quality control. Delivered in 8 months",
          "Operating facilities monitoring portal (Technical Inspectorate of the Unified Energy System)",
          "Managing the development team, code review, development specifications",
          "Backend in Java, Oracle and PL/SQL, WebLogic; technical design: solution architecture, data model, interfaces",
          "Requirements analysis, reporting documentation to GOST 34",
        ],
        team: "Team - 5-10 people",
        tags: ["Java", "Oracle", "PL/SQL", "WebLogic", "GOST 34"],
      },
    ],
    ru: [
      {
        period: "Октябрь 2025 - Июнь 2026",
        role: "Tech Lead / технический руководитель проектов",
        company: "Независимая практика",
        projects: [
          {
            name: "BrainySoft - BPM-ядро кредитного конвейера (финтех)",
            period: "Март - июнь 2026",
            intro:
              "Требовалось организовать разработку BPM-движка на базе Flowable. Что удалось успеть сделать:",
            bullets: [
              "Миграция зависимостей: Java 17->25 | Kotlin 1.6->2.4 | Spring Boot 2.7->4.1 | Flowable 6.8->8.0",
              "Рефакторинг архитектуры приложения через проектирование (C4, Structurizr), документирование (база знаний, ADR) и реализацию. Создание уникального трёхконтурного паттерна компонентов вокруг ядра Flowable",
              "Переход на API-first. Внедрение практики проектирования REST API (OpenAPI 3.1) с точки зрения потребителя (developer experience), кодогенерация (openapi-generator) моделей и интерфейсов, механизм бесшовного склеивания собственного и сгенерированного кода",
              "Платформа интеграционного тестирования по направлениям: сервисы, процессы (BPMN E2E), безопасность (модели угроз), наблюдаемость (трассировка). Spring Boot Test + Testcontainers",
              "Анализ требований: декомпозиция и оценка, релизный план, приоритизация техдолга, ежедневная работа с разработчиками, аналитиками, тестировщиками",
              "Low-code-конструктор BPMN: YAML-дескрипторы доменных элементов палитры - метаданные, схема формы настройки, правила записи в BPMN-XML",
              "Собственный движок форм, вдохновлённый form-js, с инъекцией переменных процесса и вычислением выражений Camunda FEEL",
              "Переход от basic auth к OIDC/JWKS, Spring Security на Keycloak",
              "Spring AOP для однотипных спанов",
              "Выбрал BI-платформу для аналитического компонента: собрал одноразовый PoC с параллельным подключением Superset и Metabase, сравнил их по функционалу и UI, обосновал итоговый выбор",
              "Внедрил инженерные практики: интеграционное тестирование, стандарты кодовой базы, quality gates. Многоэтапный CI/CD в GitLab: статические проверки, ktlint и detekt, собственные правила линтера Spectral для контрактов, сборка, автодеплой",
              "Менторство: код-ревью как обучение, разбор архитектурных решений, ввод в предметную область",
              "Разработал pipeline автоматической оценки фактических трудозатрат разработчиков: интеграция Jira и GitLab, AI-агент оценивает еженедельные git-diff по коммитам, нормализация часов на коммиты, маппинг на задачи Jira, заполнение Jira Timesheets. Вручную только approve",
            ],
            stack:
              "Итоговый стек: Kotlin 2.4 / Java 25, Gradle 9.4, Spring Boot 4.1 и Spring Cloud 2025.1 (OpenFeign, LoadBalancer); Flowable 8, PostgreSQL, Liquibase; Spring Kafka, Confluent Schema Registry; OpenAPI 3.1, Keycloak (OIDC/JWKS, Spring Security), Groovy 5, Camunda FEEL Engine; OpenTelemetry, Micrometer (Prometheus и OTLP registry), distributed tracing, Logstash Logback; JUnit 5, Mockito-Kotlin, Testcontainers, Spring Boot Test; KtLint и detekt; Docker Compose, Traefik, nginx",
          },
          {
            name: "Corestone - корпоративное хранилище данных и аналитика",
            period: "Ноябрь 2025 - март 2026",
            bullets: [
              "Переезд из Yandex DataLens в Grafana (десятки дашбордов, сотни динамических панелей)",
              "Трёхслойное хранилище на PostgreSQL по модели Stage / Core / Mart: сырые данные, нормализованное ядро, бизнес-витрины",
              "Сбор данных из Bitrix24, «План-Факт», CallTouch. ETL на n8n, трансформации на PL/pgSQL",
              "Глубокий разбор первичных лидов: восстановление маркетинговой цепочки по UTM-меткам от источника до сделки, сведение рекламных затрат с выручкой",
              "Обучение сотрудников работе в Grafana",
            ],
          },
          {
            name: "ostrovok.ru - AI-автоматизация первой линии поддержки",
            period: "Октябрь - декабрь 2025",
            bullets: [
              "Camunda 8 (Zeebe): оркестрация LLM-агентов (воркеров) в процессах обработки тикетов",
              "Написал BPMN Design Convention Guide - стандарт моделирования процессов",
              "Нестандартные технологические BPMN-процессы: маршрутизатор Kafka-сообщений, LRA-кеш доступных агентов",
              "Составные DMN из сцепленных таблиц, поддерживающие сложные мультиязычные комбинации «вопрос-ответ»",
            ],
          },
        ],
        tags: [
          "Flowable 8",
          "Camunda 8",
          "Kotlin",
          "Spring Boot 4",
          "LLM-агенты",
          "Testcontainers",
          "n8n",
          "Grafana",
        ],
      },
      {
        period: "Апрель 2024 - Сентябрь 2025",
        role: "Системный архитектор",
        company: "Solvo",
        companyUrl: "https://www.solvo.ru",
        intro:
          "Магистральной задачей было внедрить современные подходы к проектированию и разработке ПО в продуктовую линейку компании. PoC - Портал перевозчика, система поиска исполнителей и торгов на выполнение заявок на транспортировку грузов.",
        bullets: [
          "Управление командой разработчиков и аналитиков: ведение бэклога и roadmap, декомпозиция и оценка, распределение работ, приёмка результата",
          "Менторство и обучение: разбор архитектурных и кодовых решений с командой",
          "Архитектура продукта в модели C4 по всем уровням с учётом общего продуктового ландшафта: микросервисная платформа с Camunda 8 в качестве оркестратора",
          "Разработка общих библиотек платформы, ускоряющих расширение предметной области новыми доменами: модели данных сервисов и воркеров, адаптер поискового JSON-API к JPA, Spring Boot стартеры с автоконфигурацией",
          "Spring Cloud Gateway на реактивном стеке, сложная маршрутизация REST->gRPC, OAuth2 client и resource server поверх Keycloak, сессии в Redis",
          "Инфраструктура: Docker Swarm, Nexus 3, Keycloak, Consul, PostgreSQL, MongoDB, Redis, Elasticsearch, ActiveMQ, Nginx, Zipkin",
          "Презентация и защита достижений на архитектурном комитете",
        ],
        tags: [
          "Java/Kotlin",
          "Spring Cloud Gateway",
          "Camunda 8",
          "C4",
          "Keycloak",
          "MongoDB",
        ],
      },
      {
        period: "Ноябрь 2023 - Март 2024",
        role: "Архитектор / Java-разработчик",
        company: "Независимая практика",
        projects: [
          {
            name: "Платформа «Охотуправление» (B2G)",
            bullets: [
              "Проектирование и разработка сервиса жизненного цикла охотничьего билета",
              "Интеграция через СМЭВ 3",
              "Оркестрация процессов на Camunda 7: External Task, Job Workers",
              "C4-модель в Structurizr, документация API, развёрнутый прототип",
            ],
          },
        ],
        tags: ["Camunda 7", "СМЭВ 3", "Java", "Structurizr"],
      },
      {
        period: "Июль 2020 - Январь 2023",
        role: "Генеральный директор / CPO",
        company: "ООО ГАЛОР",
        companyUrl: "https://soarse.com",
        intro:
          "Руководитель продуктового стартапа (с партнёрами): Low-Code платформа Soarse - от MVP до промышленной эксплуатации в трёх федеральных ведомствах.",
        bullets: [
          "Собрали команду с нуля до 20 человек, Гарцбургская модель управления",
          "Внедрил SAFe, скрупулёзно адаптированный под размер компании, матрица ответственности RACI",
          "База знаний на сотни статей: от внутренних стандартов и продуктовой аналитики до постановок в разработку и технической документации",
          "Проектирование бизнес-архитектуры продукта: метамодель и 11 компонентов - данные, файлы, доступ, интерфейс, вычисления, процессы, связи и онтологии, дерево каталогов, валидация, асинхронные задачи",
          "Микросервисная архитектура: Java, Spring Boot и Spring Cloud, Spring Cloud Gateway, PostgreSQL, Redis, RabbitMQ, Consul, Nginx; фронт - React и TypeScript",
          "Технологии Semantic WEB: RDF-хранилище (Apache Jena, TDB, Fuseki, SPARQL, OWL), семантический поиск",
          "Пресейлы, показы и презентации на уровне директоров департаментов федеральных ведомств, приёмо-сдаточные испытания",
          "Государственная система правовой статистики (Генпрокуратура РФ) - компонент НСИ и метаданных",
          "Информационная система Российского футбольного союза",
          "Система учёта древесины и сделок с ней (Рослесхоз)",
        ],
        team: "Команда - 20 человек",
        tags: [
          "Low-code",
          "Spring Cloud",
          "React",
          "PostgreSQL",
          "Apache Jena",
          "SAFe",
        ],
      },
      {
        period: "Июль 2019 - Январь 2022",
        role: "Методолог-консультант",
        company: "Bazelevs",
        companyUrl: "https://www.bazelevs.ru",
        note: "Частичная занятость параллельно с основной работой",
        intro:
          "Внедрение корпоративной системы управления проектами кинопроизводства BZDays на базе Jira Server.",
        bullets: [
          "Спроектировал и реализовал методологию ведения проектов как многоуровневое дерево этапов и задач (Jira Structure)",
          "ScriptRunner: динамическая настройка интерфейсов и полей, поведение форм, валидации, обработчики переходов, скриптовые задания, REST-эндпоинты, интеграции с внешними системами",
          "Кастомизация Jira: схемы workflow, права, разработка плагинов, интеграция с 1С",
          "Сбор требований: интервью 30+ пользователей - продюсеры, руководство, финансовый и юридический отделы из трёх стран (РФ, Казахстан, США)",
          "Обучающие семинары: 4 группы по 10-15 человек",
        ],
        tags: ["Jira", "ScriptRunner", "Groovy", "1С", "BPMN"],
      },
      {
        period: "Март 2017 - Июнь 2020",
        role: "Руководитель проектов / архитектор",
        company: "GOST Group",
        companyUrl: "https://www.gost-group.com",
        intro:
          "Заказная разработка для B2G и внутренний продукт. Управление командами и проектами полного цикла, от сбора требований до сдачи в эксплуатацию.",
        bullets: [
          "АПК «Безопасный город» (ГУ МЧС по Сахалинской области) - руководитель проекта в классическом смысле: план этапов, сроки, бюджет, риски, координация распределённой команды 15 человек, прямая работа с заказчиком и силовыми ведомствами. Сдан за 8 месяцев в жёстких сроках, решение затем тиражировано на Рязанскую и Смоленскую области",
          "ГИС «Инженерно-энергетический комплекс Санкт-Петербурга» (Комитет по энергетике СПб) - архитектор системы: команда 30 человек, 28 месяцев, 14 подсистем. Кластер из 4 геосерверов с балансировкой, sticky-сессиями и fail-over, PostGIS, работа с геоданными и проекциями",
          "ИС Отчётность. ГИС ТЭК (ПАО «Лукойл»)",
          "Управление командой разработки, код-ревью, трассируемость требований до реализации, обучение пользователей заказчика",
          "Артефакты проектирования (UML, ER, BPMN, C4), backend на Java (Spring), проектирование БД (PostgreSQL, Oracle), полный комплект документации по ГОСТ 34",
        ],
        team: "Команда - 10-30 человек",
        tags: ["Java", "Spring", "PostgreSQL", "ГИС", "UML", "ГОСТ 34"],
      },
      {
        period: "Сентябрь 2014 - Февраль 2017",
        role: "Руководитель направления разработки",
        company: "АйТи Энерджи Сервис",
        companyUrl: "https://www.it-energy.ru",
        intro:
          "Техническое руководство аналитикой, разработкой и ключевыми проектами.",
        bullets: [
          "Слияние и трансформация команды 35 человек (АС СиОИ): объединил молодую команду новой очереди и «старую гвардию» - программистов со стажем 30+ лет. Организовал переобучение с Excel VBA на Java, Oracle APEX и SAP BusinessObjects и систему взаимного наставничества между поколениями",
          "Портал МДО (Минэнерго России) - мониторинг действующих объектов электроэнергетики. «Лучший ИТ-проект в ТЭК» 2016",
          "Система учёта электроэнергии на межгосударственных ЛЭП (ПАО «Россети»)",
          "Проектирование архитектуры, интерфейсов и модели данных, компонент НСИ; backend на Java, Oracle и PL/SQL",
        ],
        team: "Команда - 15-40 человек",
        tags: ["Java", "Oracle", "SAP BO", "Oracle APEX", "B2G"],
      },
      {
        period: "Июнь 2011 - Август 2014",
        role: "Тимлид Java / руководитель проекта",
        company: "АйТи Энерджи Сервис",
        companyUrl: "https://www.it-energy.ru",
        bullets: [
          "Портал мониторинга инвестиционных программ (Минэнерго России) - руководитель проекта: планирование бюджета и сроков, формирование команды 10 человек, работа с заказчиком, контроль качества. Сдан за 8 месяцев",
          "Портал мониторинга действующих объектов (Техническая инспекция ЕЭС)",
          "Управление командой разработчиков, код-ревью, постановки на разработку",
          "Backend на Java, Oracle и PL/SQL, WebLogic; техническое проектирование: архитектура решения, модель данных, интерфейсы",
          "Анализ требований, отчётная документация по ГОСТ 34",
        ],
        team: "Команда - 5-10 человек",
        tags: ["Java", "Oracle", "PL/SQL", "WebLogic", "ГОСТ 34"],
      },
    ],
  };

  const education = {
    en: {
      title: "Education & Languages",
      degree: "Higher education, incomplete",
      school:
        "Lomonosov Moscow State University, Faculty of Bioengineering and Bioinformatics",
      period: "2004 - 2011",
      exam: "Skyeng, 2019 - General English Advanced",
      languagesTitle: "Languages",
      languages: [
        "Russian - native",
        "English - C1, advanced",
        "French - A2, elementary",
      ],
    },
    ru: {
      title: "Образование и языки",
      degree: "Высшее, неоконченное",
      school:
        "МГУ имени М.В. Ломоносова, факультет биоинженерии и биоинформатики",
      period: "2004 - 2011",
      exam: "Skyeng, 2019 - General English Advanced",
      languagesTitle: "Языки",
      languages: [
        "Русский - родной",
        "Английский - C1, продвинутый",
        "Французский - A2, элементарный",
      ],
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
          <SEO {...pageMeta("/cv", language)} />
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
            href="https://hh.ru/resume/2dff6faeff0cde804d0039ed1f4b3074475038"
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
          {currentProfile.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-slate-700 dark:text-slate-300 mb-3"
            >
              {paragraph}
            </p>
          ))}
          <h3 className="mt-5 font-bold text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
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
          {currentSkills.groups.map((group) => (
            <Card key={group.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary-500 mt-1">{group.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-3">{group.title}</h3>
                  <TagList tags={group.tags} size="sm" />
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
            <Card key={`${exp.company}-${exp.period}`} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="font-bold text-xl">{exp.role}</h3>
                  <p className="text-primary-500">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 text-sm mt-2 md:mt-0 shrink-0">
                  {exp.period}
                </span>
              </div>

              {exp.note && (
                <p className="text-sm italic text-slate-500 dark:text-slate-400 mb-3">
                  {exp.note}
                </p>
              )}

              {exp.intro && (
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  {exp.intro}
                </p>
              )}

              {exp.bullets && (
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <span className="text-cinnabar-500 dark:text-cinnabar-400 mt-0.5 shrink-0">
                        &#8226;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {exp.projects?.map((project) => (
                <div key={project.name} className="mb-5">
                  <h4 className="font-bold text-base mt-4 mb-1">
                    {project.name}
                  </h4>
                  {project.period && (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      {project.period}
                    </p>
                  )}
                  {project.intro && (
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {project.intro}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {project.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="text-cinnabar-500 dark:text-cinnabar-400 mt-0.5 shrink-0">
                          &#8226;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {project.stack && (
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                      {project.stack}
                    </p>
                  )}
                </div>
              ))}

              {exp.team && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {exp.team}
                </p>
              )}

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
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {currentEducation.period}
              </p>
              <h4 className="font-bold text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                {currentEducation.languagesTitle}
              </h4>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1 mb-3">
                {currentEducation.languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {currentEducation.exam}
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Contact CTA */}
      <Card className="p-8 bg-linear-to-r from-primary-500 to-primary-600 text-white border-0">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            {language === "en" ? "Discuss a role" : "Обсудить роль"}
          </h3>
          <p className="mb-6 opacity-90">
            {language === "en"
              ? "Describe the team and the task."
              : "Опишите команду и задачу."}
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to={localePath("/contact")}>
              {language === "en" ? "Get in Touch" : "Связаться"}
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
