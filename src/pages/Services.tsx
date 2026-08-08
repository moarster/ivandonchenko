import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";
import { useLanguage } from "@/hooks/useLanguage";

interface Service {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  caseNote?: string;
  tags: string[];
}

const services: Record<"en" | "ru", Service[]> = {
  en: [
    {
      title: "Head of development, in-house",
      subtitle: "The main format",
      description:
        "I take the team and the result as a whole: people, deadlines, architecture, code review — and I write code myself. Needed where there is one cross-functional team, or several track leads with nobody above them holding the overall result.",
      highlights: [
        "Hiring, onboarding, 1:1s, grades, mentoring, retention",
        "Breakdown, effort and schedule estimation together with the team",
        "Sprints and releases, backlog and roadmap, risks and escalation",
        "Code review, standards and quality gates, tech debt",
        "Direct work with the client and product owner, acceptance, demos, presales",
      ],
      caseNote:
        "Teams from 5 to 40 people: head of a development division with a portfolio of 3–5 parallel projects, CTO of a product startup, full-cycle project manager.",
      tags: ["Java/Kotlin", "Agile / Scrum", "Code review", "Roadmap", "1:1"],
    },
    {
      title: "Tech lead on a project",
      subtitle: "Part-time or for the duration of the project",
      description:
        "The project exists, the technical leader does not: nobody breaks the work down, estimates the schedule, or answers to the client for the result. I take that role — part-time or for the length of the project.",
      highlights: [
        "Task definition and progress control",
        "Effort and schedule estimation, release plan",
        "Review of the team’s architecture and code decisions",
        "Reporting and demos to the client",
      ],
      caseNote:
        "The current format since October 2025: three parallel projects in three domains — fintech, first-line support of an international booking service, a corporate data warehouse.",
      tags: ["Tech Lead", "Estimation", "BPMN", "C4 / ADR"],
    },
    {
      title: "Team and delivery audit",
      subtitle: "When releases slip and estimates never match reality",
      description:
        "Releases slip, estimates don’t match the actuals, quality rests on a few heroes? I look at how the team works today and set up the process: breakdown, estimation, quality gates, CI/CD, and an objective basis for the conversation about grades.",
      highlights: [
        "Audit of development processes and tech debt",
        "A methodology for assessing actual developer effort using neural networks",
        "Quality gates, CI/CD, codebase standards",
        "Standardising several teams: service templates, SLAs between teams, API-first contracts",
      ],
      caseNote:
        "The effort assessment methodology was built and applied on the loan origination project. Standards for product teams — Solvo, the WMS/YMS platform track.",
      tags: ["Quality gates", "GitLab CI/CD", "OpenAPI", "Assessment"],
    },
    {
      title: "Architecture and BPM development",
      subtitle: "Designed and taken to production",
      description:
        "You need architecture for a new product, or process automation on a BPM engine. I design it and take it to production: BPMN processes, integrations, error handling, monitoring, and documentation that still makes sense a year later.",
      highlights: [
        "Camunda 7/8 and Flowable: 5 years of Camunda in production, engine migrations",
        "Microservices on Spring Boot/Cloud, REST and gRPC, event-driven, DDD",
        "LLM agents inside BPMN processes — in production, not in a pilot",
        "C4, ADR, Structurizr; contract and e2e tests on Testcontainers",
      ],
      caseNote:
        "Loan origination pipeline on Flowable 8/Kotlin: engine upgrade from 6.7 without stopping the business. First-line support of an international booking service: BPMN processes with LLM agents on Camunda 8.",
      tags: ["Camunda 7/8", "Flowable", "BPMN", "Spring Boot", "LLM"],
    },
  ],
  ru: [
    {
      title: "Руководитель разработки в штат",
      subtitle: "Основной формат",
      description:
        "Беру команду и результат целиком: люди, сроки, архитектура, код-ревью — и сам пишу код. Нужен там, где команда одна и кросс-функциональная, или где есть тимлиды направлений, а над ними некому держать общий результат.",
      highlights: [
        "Наём, онбординг, 1:1, грейды, менторинг, удержание",
        "Декомпозиция, оценка трудоёмкости и сроков вместе с командой",
        "Спринты и релизы, бэклог и roadmap, риски и эскалация",
        "Код-ревью, стандарты и quality gates, работа с техдолгом",
        "Прямая работа с заказчиком и product owner, приёмка, демо, пресейл",
      ],
      caseNote:
        "Команды от 5 до 40 человек: руководитель направления разработки с портфелем из 3–5 параллельных проектов, CTO продуктового стартапа, руководитель проектов полного цикла.",
      tags: ["Java/Kotlin", "Agile / Scrum", "Код-ревью", "Roadmap", "1:1"],
    },
    {
      title: "Tech Lead на проект",
      subtitle: "Частичная занятость или на срок проекта",
      description:
        "Проект есть, технического руководителя нет: некому декомпозировать работу, оценить сроки и отвечать за результат перед заказчиком. Беру эту роль — на part-time или на время проекта.",
      highlights: [
        "Постановка задач и контроль хода работ",
        "Оценка трудоёмкости и сроков, релизный план",
        "Ревью архитектурных и кодовых решений команды",
        "Отчётность и демонстрации заказчику",
      ],
      caseNote:
        "Текущий формат с октября 2025: три параллельных проекта в трёх доменах — финтех, первая линия поддержки международного сервиса бронирования, корпоративное хранилище данных.",
      tags: ["Tech Lead", "Оценка сроков", "BPMN", "C4 / ADR"],
    },
    {
      title: "Аудит команды и постановка delivery",
      subtitle: "Когда релизы срываются, а оценки не сходятся с фактом",
      description:
        "Релизы срываются, оценки не сходятся с фактом, качество держится на нескольких героях? Разбираю, как команда работает сейчас, и ставлю процесс: декомпозиция, оценка, quality gates, CI/CD и объективная база для разговора о грейдах.",
      highlights: [
        "Аудит процессов разработки и техдолга",
        "Методика оценки фактических трудозатрат разработчиков с применением нейросетей",
        "Quality gates, CI/CD, стандарты кодовой базы",
        "Стандартизация работы нескольких команд: шаблоны сервисов, SLA между командами, API-first",
      ],
      caseNote:
        "Методика оценки трудозатрат разработана и применена на проекте кредитного конвейера. Стандарты для продуктовых команд — Solvo, платформенное направление WMS/YMS.",
      tags: ["Quality gates", "GitLab CI/CD", "OpenAPI", "Assessment"],
    },
    {
      title: "Архитектура и BPM-разработка",
      subtitle: "Спроектировать и довести до эксплуатации",
      description:
        "Нужна архитектура под новый продукт или автоматизация процессов на BPM-движке. Проектирую и довожу до промышленной эксплуатации: BPMN-процессы, интеграции, обработка ошибок, мониторинг и документация, которая понятна и через год.",
      highlights: [
        "Camunda 7/8 и Flowable: 5 лет Camunda в production, миграции движков",
        "Микросервисы на Spring Boot/Cloud, REST и gRPC, event-driven, DDD",
        "LLM-агенты внутри BPMN-процессов — в промышленной эксплуатации, не в пилоте",
        "C4, ADR, Structurizr; контрактные и e2e-тесты на Testcontainers",
      ],
      caseNote:
        "Кредитный конвейер на Flowable 8/Kotlin: апгрейд движка с 6.7 без остановки бизнеса. Первая линия поддержки международного сервиса бронирования: BPMN-процессы с LLM-агентами на Camunda 8.",
      tags: ["Camunda 7/8", "Flowable", "BPMN", "Spring Boot", "LLM"],
    },
  ],
};

export function Services() {
  const { language, t, localePath } = useLanguage();
  const currentServices = services[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title={
          language === "en"
            ? "Engagement formats — Ivan Donchenko"
            : "Форматы работы — Иван Донченко"
        }
        description={
          language === "en"
            ? "Head of development in-house, tech lead on a project, team and delivery audit, architecture and BPM development on Camunda/Flowable."
            : "Руководитель разработки в штат, Tech Lead на проект, аудит команды и постановка delivery, архитектура и BPM-разработка на Camunda/Flowable."
        }
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-4">
          {language === "en" ? "Engagement formats" : "Форматы работы"}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
          {language === "en"
            ? "The main format is head of development, in-house: the team, the deadlines, the architecture, and code review are mine. The formats below are for cases where that role is needed part-time or only for the length of a project."
            : "Основной формат — руководитель разработки в штат: команда, сроки, архитектура и код-ревью на мне. Форматы ниже — для случаев, когда эта роль нужна частично или только на время проекта."}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {currentServices.map((service) => (
            <Card key={service.title} className="p-6 flex flex-col">
              <h2 className="text-2xl font-display font-bold mb-1">
                {service.title}
              </h2>
              <p className="text-primary-500 text-sm font-medium mb-3">
                {service.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 mb-4 flex-1">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-cinnabar-500 dark:text-cinnabar-400 mt-0.5">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {service.caseNote && (
                <p className="text-sm italic text-slate-500 dark:text-slate-400 mb-4">
                  {service.caseNote}
                </p>
              )}

              <TagList tags={service.tags} size="sm" />

              <Button asChild className="mt-4 self-start">
                <Link to={localePath("/contact")}>
                  {t("discussCase")}
                  <HiArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-slate-500 dark:text-slate-400 text-center max-w-3xl mx-auto">
          {language === "en"
            ? "Where I don’t fit: pure senior-IC positions without a team, and hiring processes gated on live coding. Where I show best: walking through an architecture case, reviewing someone else’s solution, and talking about how I ran a specific project and specific people."
            : "Куда я не подхожу: чистые senior-IC позиции без команды и отбор через лайвкодинг. Формат, где меня видно: разбор архитектурного кейса, ревью чужого решения и разговор о том, как я вёл конкретный проект и конкретных людей."}
        </p>

        <Card className="mt-12 p-8 bg-linear-to-r from-primary-500 to-primary-600 text-white border-0">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              {language === "en"
                ? "Looking for a head of development?"
                : "Ищете руководителя разработки?"}
            </h3>
            <p className="mb-6 opacity-90">
              {language === "en"
                ? "Describe the team and the task — I’ll tell you where I would be useful and where I would not"
                : "Опишите команду и задачу — расскажу, где я буду полезен, а где нет"}
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to={localePath("/contact")}>
                {t("discussCase")}
                <HiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
