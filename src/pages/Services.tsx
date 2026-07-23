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
      title: "Business Process Automation (BPM)",
      subtitle: "From process map to working system",
      description:
        "Requests live in email and spreadsheets, and nobody knows where the process is stuck? I map the process, model it in BPMN, deploy Camunda or Flowable, and take it to a working system: integrations, error handling, monitoring.",
      highlights: [
        "Process discovery and BPMN/DMN modeling",
        "Camunda & Flowable implementation, 7→8 migrations",
        "Integrations, error handling, monitoring",
        "5 years of Camunda in production",
      ],
      caseNote:
        "Recent case: a loan origination pipeline for a fintech on Flowable 8 — led the development.",
      tags: ["Camunda 7/8", "Flowable", "BPMN", "DMN", "Kotlin/Java"],
    },
    {
      title: "AI in Business Processes",
      subtitle: "LLM agents embedded in workflows",
      description:
        "Your team reads emails, requests, and contracts by hand? I embed LLMs (ChatGPT, Claude, Gemini, local models) directly into the process: request classification and routing, document analysis, response drafting. Economics first, then implementation.",
      highlights: [
        "Request classification and routing",
        "Document analysis and response drafting",
        "AI agents inside BPMN processes (Camunda 8)",
        "ROI estimate before implementation",
      ],
      caseNote:
        "Production case: AI-powered ticket handling for the first-line support of an international booking service — BPMN processes with LLM agents on Camunda 8.",
      tags: ["LLM", "ChatGPT / Claude / Gemini", "Local models", "Camunda 8"],
    },
    {
      title: "Business Analysis & Architecture",
      subtitle: "Requirements, audit, transformation",
      description:
        "A project stalls because business and engineering don’t speak the same language? I elicit and structure requirements, design the solution, and document it so both management and developers understand it — even a year later.",
      highlights: [
        "Requirements elicitation and structuring",
        "Architecture and process audit",
        "Transformation roadmap without stopping the business",
        "Pre-investment due diligence",
        "Documentation that lasts: C4, ADR",
      ],
      tags: ["BPMN", "C4", "ADR", "Arc42", "UML"],
    },
    {
      title: "Data & Integrations",
      subtitle: "ETL, dashboards, a single source of truth",
      description:
        "Data entered twice, reports assembled by hand? I connect CRM, ERP, 1C, and government services, build ETL and dashboards. If a simple script solves it, I won’t drag in a heavy platform.",
      highlights: [
        "System integration (CRM, ERP, 1C, government services)",
        "ETL pipelines: Airflow, n8n, NiFi",
        "Dashboards: Grafana, Metabase",
        "Data migration with transformation",
      ],
      caseNote:
        "Recent case: a corporate data lake with ETL from four business systems.",
      tags: ["Airflow", "n8n", "NiFi", "PostgreSQL", "Grafana", "Metabase"],
    },
  ],
  ru: [
    {
      title: "Автоматизация бизнес-процессов (BPM)",
      subtitle: "От схемы процесса до работающей системы",
      description:
        "Заявки живут в почте и Excel, и никто не знает, где застрял процесс? Разберу процесс, смоделирую его в BPMN, внедрю Camunda или Flowable и доведу до работающей системы: интеграции, обработка ошибок, мониторинг.",
      highlights: [
        "Анализ процесса и моделирование BPMN/DMN",
        "Внедрение Camunda и Flowable, миграции 7→8",
        "Интеграции, обработка ошибок, мониторинг",
        "5 лет Camunda в production",
      ],
      caseNote:
        "Свежий кейс: кредитный конвейер для финтеха на Flowable 8 — руководил разработкой.",
      tags: ["Camunda 7/8", "Flowable", "BPMN", "DMN", "Kotlin/Java"],
    },
    {
      title: "AI в бизнес-процессах",
      subtitle: "LLM-агенты внутри процессов",
      description:
        "Сотрудники вручную читают письма, заявки и договоры? Встрою LLM (ChatGPT, Claude, Gemini, локальные модели) прямо в процесс: классификация и маршрутизация обращений, разбор документов, подготовка ответов. Сначала считаем экономику, потом внедряем.",
      highlights: [
        "Классификация и маршрутизация обращений",
        "Разбор документов и подготовка ответов",
        "AI-агенты внутри BPMN-процессов (Camunda 8)",
        "Оценка экономики до внедрения",
      ],
      caseNote:
        "Боевой кейс: AI-обработка обращений первой линии поддержки международного сервиса бронирования — BPMN-процессы с LLM-агентами на Camunda 8.",
      tags: [
        "LLM",
        "ChatGPT / Claude / Gemini",
        "Локальные модели",
        "Camunda 8",
      ],
    },
    {
      title: "Бизнес-анализ и архитектура",
      subtitle: "Требования, аудит, трансформация",
      description:
        "Проект буксует, потому что бизнес и разработка говорят на разных языках? Сниму и структурирую требования, спроектирую решение и задокументирую так, что будет понятно и менеджменту, и разработчикам — даже через год.",
      highlights: [
        "Снятие и структурирование требований",
        "Аудит архитектуры и процессов",
        "План трансформации без остановки бизнеса",
        "Due diligence перед инвестициями",
        "Документация, которая живёт: C4, ADR",
      ],
      tags: ["BPMN", "C4", "ADR", "Arc42", "UML"],
    },
    {
      title: "Данные и интеграции",
      subtitle: "ETL, дашборды, единый источник правды",
      description:
        "Данные вводятся дважды, отчёты собираются руками? Свяжу CRM, ERP, 1С и госсервисы, построю ETL и дашборды. Если задача решается простым скриптом — не буду тащить тяжёлую платформу.",
      highlights: [
        "Интеграция систем (CRM, ERP, 1С, госсервисы)",
        "ETL-пайплайны: Airflow, n8n, NiFi",
        "Дашборды: Grafana, Metabase",
        "Миграция данных с трансформацией",
      ],
      caseNote:
        "Свежий кейс: корпоративный Data Lake — ETL из Bitrix24, ПланФакт, CallTouch и 1С.",
      tags: ["Airflow", "n8n", "NiFi", "PostgreSQL", "Grafana", "Metabase"],
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
            ? "Services — Ivan Donchenko"
            : "Услуги — Иван Донченко"
        }
        description={
          language === "en"
            ? "Camunda/Flowable business process automation, AI/LLM agents in workflows, business analysis, architecture audit, integrations and ETL."
            : "Автоматизация бизнес-процессов на Camunda/Flowable, AI и LLM-агенты в процессах, бизнес-анализ, аудит архитектуры, интеграции и ETL."
        }
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-4">
          {language === "en" ? "Services" : "Услуги"}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
          {language === "en"
            ? "I help businesses automate processes and bring order to their systems — with AI where it pays off, and without it where a simple script will do."
            : "Помогаю бизнесу автоматизировать процессы и наводить порядок в системах — с нейросетями там, где они дают эффект, и без них там, где хватает простого скрипта."}
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
            ? "What I don’t do: “just a Java senior” staff augmentation, template websites, bots-for-hire. My value is the bundle: analysis + architecture + delivery."
            : "Чем я не занимаюсь: аутстафф «просто Java-сеньором», типовые сайты и боты. Моя ценность — связка: анализ + архитектура + внедрение."}
        </p>

        <Card className="mt-12 p-8 bg-linear-to-r from-primary-500 to-primary-600 text-white border-0">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              {language === "en" ? "Have a task in mind?" : "Есть задача?"}
            </h3>
            <p className="mb-6 opacity-90">
              {language === "en"
                ? "Describe it in your own words — I’ll suggest the best approach and estimate the timeline"
                : "Опишите её своими словами — подскажу оптимальный подход и оценю сроки"}
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
