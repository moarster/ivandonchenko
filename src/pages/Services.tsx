import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";
import { useLanguage } from "@/hooks/useLanguage";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const services = {
  en: [
    {
      title: "IT Architecture",
      subtitle: "Audit, Design & Transformation",
      description:
        "System architecture design for enterprise projects: from audit of existing solutions to building new platforms from scratch. Microservices, integration layers, API design, and digital transformation roadmaps.",
      tags: [
        "Microservices",
        "SOA",
        "DDD",
        "REST/gRPC",
        "C4/Arc42",
        "API Gateway",
      ],
      highlights: [
        "Architecture audit and risk assessment",
        "Monolith-to-microservices transformation",
        "Integration layer and API design",
        "Technology selection consulting",
      ],
    },
    {
      title: "Java / Kotlin Backend",
      subtitle: "Development, Refactoring & Modernization",
      description:
        "Full-cycle backend development on Java/Kotlin with Spring ecosystem. From greenfield projects to modernization of legacy systems, performance optimization, and migration to newer platform versions.",
      tags: ["Java", "Kotlin", "Spring Boot/Cloud", "PostgreSQL", "Docker"],
      highlights: [
        "Spring Boot/Cloud microservices",
        "REST API & OpenAPI design",
        "Legacy modernization (Java 8→21, Spring Boot 2→3)",
        "Performance optimization and code audit",
      ],
    },
    {
      title: "Camunda / Flowable",
      subtitle: "BPM & Process Automation",
      description:
        "Business process automation with Camunda and Flowable platforms. BPMN/DMN modeling, Job Worker development, process orchestration, and migration between platform versions.",
      tags: [
        "Camunda 7/8",
        "Flowable",
        "BPMN",
        "DMN",
        "Job Workers",
        "Connectors",
      ],
      highlights: [
        "Process modeling and orchestration",
        "Job Workers in Java/Kotlin/TypeScript",
        "System integration via connectors",
        "Camunda 7→8 migration",
      ],
    },
    {
      title: "Pipeline / ETL / BI",
      subtitle: "Data Integration & Analytics",
      description:
        "Data integration pipelines, ETL processes, and analytics infrastructure. Connecting corporate systems, government services, databases, and external APIs into a unified data flow.",
      tags: ["Apache NiFi", "Airflow", "Kafka", "n8n", "SQL", "BI"],
      highlights: [
        "ETL pipeline design and implementation",
        "System integration (CRM, ERP, 1C)",
        "Data migration with transformation",
        "Monitoring and alerting setup",
      ],
    },
  ],
  ru: [
    {
      title: "Архитектура ИТ-систем",
      subtitle: "Аудит, проектирование, трансформация",
      description:
        "Проектирование архитектуры корпоративных систем: от аудита существующих решений до создания новых платформ с нуля. Микросервисы, интеграционные слои, проектирование API и дорожные карты цифровой трансформации.",
      tags: [
        "Микросервисы",
        "SOA",
        "DDD",
        "REST/gRPC",
        "C4/Arc42",
        "API Gateway",
      ],
      highlights: [
        "Аудит архитектуры и оценка рисков",
        "Трансформация монолита в микросервисы",
        "Проектирование интеграционного слоя и API",
        "Консалтинг по выбору технологий",
      ],
    },
    {
      title: "Java / Kotlin Backend",
      subtitle: "Разработка, рефакторинг, модернизация",
      description:
        "Полный цикл backend-разработки на Java/Kotlin со стеком Spring. От новых проектов до модернизации legacy-систем, оптимизации производительности и миграции на актуальные версии.",
      tags: ["Java", "Kotlin", "Spring Boot/Cloud", "PostgreSQL", "Docker"],
      highlights: [
        "Микросервисы на Spring Boot/Cloud",
        "Проектирование REST API и OpenAPI",
        "Модернизация legacy (Java 8→21, Spring Boot 2→3)",
        "Оптимизация производительности и аудит кода",
      ],
    },
    {
      title: "Camunda / Flowable",
      subtitle: "BPM и автоматизация процессов",
      description:
        "Автоматизация бизнес-процессов на платформах Camunda и Flowable. Моделирование BPMN/DMN, разработка Job Workers, оркестрация процессов и миграция между версиями.",
      tags: [
        "Camunda 7/8",
        "Flowable",
        "BPMN",
        "DMN",
        "Job Workers",
        "Connectors",
      ],
      highlights: [
        "Моделирование и оркестрация процессов",
        "Job Workers на Java/Kotlin/TypeScript",
        "Интеграция систем через коннекторы",
        "Миграция Camunda 7→8",
      ],
    },
    {
      title: "Pipeline / ETL / BI",
      subtitle: "Интеграция данных и аналитика",
      description:
        "Пайплайны интеграции данных, ETL-процессы и аналитическая инфраструктура. Связывание корпоративных систем, госсервисов, баз данных и внешних API в единый поток данных.",
      tags: ["Apache NiFi", "Airflow", "Kafka", "n8n", "SQL", "BI"],
      highlights: [
        "Проектирование и реализация ETL-пайплайнов",
        "Интеграция систем (CRM, ERP, 1С)",
        "Миграция данных с трансформацией",
        "Настройка мониторинга и алертинга",
      ],
    },
  ],
};

export function Services() {
  const { language, localePath } = useLanguage();
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
            ? "IT architecture audit, Java/Kotlin backend development, Camunda/Flowable BPM automation, ETL pipelines and data integration."
            : "Аудит ИТ-архитектуры, backend-разработка на Java/Kotlin, автоматизация BPM на Camunda/Flowable, ETL-пайплайны и интеграция данных."
        }
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-4">
          {language === "en" ? "Services" : "Услуги"}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
          {language === "en"
            ? "I help companies design, build, and modernize software systems. Here are my key areas of expertise."
            : "Помогаю компаниям проектировать, создавать и модернизировать программные системы. Основные направления работы."}
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

              <TagList tags={service.tags} size="sm" />
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-linear-to-r from-primary-500 to-primary-600 text-white border-0">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              {language === "en" ? "Have a project in mind?" : "Есть проект?"}
            </h3>
            <p className="mb-6 opacity-90">
              {language === "en"
                ? "Let's discuss your task — I'll suggest the best approach and estimate the timeline"
                : "Давайте обсудим задачу — подскажу оптимальный подход и оценю сроки"}
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to={localePath("/contact")}>
                {language === "en" ? "Get in Touch" : "Связаться"}
                <HiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
