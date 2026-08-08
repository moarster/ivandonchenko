import { HiCalendar } from "react-icons/hi";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";
import { useLanguage } from "@/hooks/useLanguage";
import { formatDatePeriod } from "@/utils/dateFormatter";

export function Projects() {
  const { language } = useLanguage();

  const projects = [
    {
      id: "loan-pipeline",
      title:
        language === "en"
          ? "Loan origination pipeline for a fintech"
          : "Кредитный конвейер для финтеха",
      description:
        language === "en"
          ? "Leading the development: planning, estimation, code review. Flowable 8/Kotlin, engine upgrade from 6.7."
          : "Руководство разработкой: планирование, оценка сроков, код-ревью. Flowable 8/Kotlin, апгрейд с 6.7.",
      datePeriod: "2026-02-01 - 2026-07-01",
      image: "/images/projects/loan-pipeline.card.svg",
      tags: ["Flowable 8", "Kotlin", "BPMN", "Testcontainers"],
    },
    {
      id: "data-lake",
      title:
        language === "en" ? "Corporate data lake" : "Корпоративный Data Lake",
      description:
        language === "en"
          ? "All company data in one place: ETL from Bitrix24, PlanFact, CallTouch, and 1C; Airflow, n8n, PostgreSQL; Metabase dashboards."
          : "Все данные компании в одном месте: ETL из Bitrix24, ПланФакт, CallTouch и 1С; Airflow, n8n, PostgreSQL; дашборды Metabase.",
      datePeriod: "2025-11-01 - 2026-03-01",
      image: "/images/projects/data-lake.card.svg",
      tags: ["Airflow", "n8n", "PostgreSQL", "Grafana", "Metabase"],
    },
    {
      id: "ai-support",
      title:
        language === "en"
          ? "AI-powered ticket handling in support"
          : "AI-обработка обращений в поддержке",
      description:
        language === "en"
          ? "Coordination with the product side and the client’s support. Production BPMN processes with LLM agents on Camunda 8."
          : "Координация с продуктом и поддержкой заказчика. Промышленные BPMN-процессы с LLM-агентами на Camunda 8.",
      datePeriod: "2025-10-01 - 2025-12-25",
      image: "/images/projects/ai-support.card.svg",
      tags: ["Camunda 8", "Zeebe", "LLM", "Java", "Python"],
    },
    {
      id: "rfs",
      title:
        language === "en"
          ? "4,000+ users across 85 regions"
          : "4000+ пользователей в 85 регионах",
      description:
        language === "en"
          ? "Digital platform of the Russian Football Union on Soarse. Role: CTO, team of 20. Global CIO Project of the Year 2021."
          : "Цифровая платформа РФС на базе Soarse. Роль: CTO, команда 20 человек. «Проект года» Global CIO 2021.",
      datePeriod: "2020-09-01 - 2021-06-21",
      image: "/images/projects/rfs.card.webp",
      tags: ["Microservices", "MDM", "Low-Code"],
    },
    {
      id: "gas-ps",
      title:
        language === "en"
          ? "Legal statistics for the Prosecutor General’s Office"
          : "Правовая статистика для Генпрокуратуры РФ",
      description:
        language === "en"
          ? "MDM & metadata subsystem of the GAS PS Portal: 16 months, data from 85 regions. Role: CTO and chief architect."
          : "Подсистема НСИ и метаданных Портала ГАС ПС: 16 месяцев, данные из 85 субъектов. Роль: CTO и главный архитектор.",
      datePeriod: "2021-10-15 - 2023-01-31",
      image: "/images/projects/gas-ps.card.webp",
      tags: ["B2G", "Microservices", "MDM", "Low-Code"],
    },
    {
      id: "soarse",
      title:
        language === "en"
          ? "My own low-code product: from idea to government contracts"
          : "Свой Low-Code продукт: от идеи до госконтрактов",
      description:
        language === "en"
          ? "CTO & CEO (2020–2023): team built from zero to 20 people, a platform of 5 builders, 2 government contracts delivered on top of it."
          : "CTO и генеральный директор (2020–2023): команда с нуля до 20 человек, платформа из 5 конструкторов, 2 госконтракта на её базе.",
      datePeriod: "2020-01-01 - 2023-02-20",
      image: "/images/projects/soarse.card.webp",
      tags: ["Low-Code", "BPM", "MDM", "Spring Cloud", "React"],
    },
    {
      id: "iek-spb",
      title:
        language === "en"
          ? "Analytical reporting time cut by 60%"
          : "−60% времени подготовки отчётов",
      description:
        language === "en"
          ? "St. Petersburg Energy Committee: geoserver cluster, team of 30, 28 months. Role: architect."
          : "Комитет по энергетике СПб: кластер геосерверов, команда 30 человек, 28 месяцев. Роль: архитектор.",
      datePeriod: "2017-10-01 - 2020-01-31",
      image: "/images/projects/iek-spb.card.webp",
      tags: ["Java", "Spring", "PostgreSQL", "GIS", "B2G"],
    },
    {
      id: "apk-bg",
      title:
        language === "en"
          ? "Emergency response time cut by 30%"
          : "−30% времени реагирования экстренных служб",
      description:
        language === "en"
          ? "Safe City, Sakhalin: 1,000+ cameras delivered in 8 months with a team of 15. Role: project lead & architect."
          : "АПК «Безопасный город», Сахалин: 1000+ камер, сдано за 8 месяцев командой из 15. Роль: руководитель проекта и архитектор.",
      datePeriod: "2017-03-01 - 2017-11-01",
      image: "/images/projects/apk-bg.card.webp",
      tags: ["Java Spring", "React", "PostgreSQL", "B2G"],
    },
    {
      id: "as-sioi",
      title:
        language === "en"
          ? "A 35-person team transformed, 97% retained"
          : "Трансформация команды из 35 человек — без потерь",
      description:
        language === "en"
          ? "Ministry of Energy: merged two teams into one of 35, changed the stack, kept 97%. The “Old Guard” story is in the blog."
          : "Минэнерго: объединил два коллектива в 35 человек, сменил стек, сохранил 97%. История «Старой Гвардии» — в блоге.",
      datePeriod: "2013-12-01 - 2017-02-28",
      image: "/images/projects/as-sioi.card.webp",
      tags: ["Java", "Oracle", "SAP BO", "Data Engineering"],
    },
    {
      id: "portal-mdo",
      title:
        language === "en"
          ? "Data analysis 40% faster"
          : "−40% времени на анализ данных",
      description:
        language === "en"
          ? "15,000+ energy facilities, ML forecasting. Role: head of development. Best IT Project in Fuel & Energy 2016."
          : "15 000+ энергообъектов Минэнерго, ML-прогноз. Руководитель направления. «Лучший ИТ-проект в ТЭК» 2016.",
      datePeriod: "2012-01-01 - 2017-02-21",
      image: "/images/projects/portal-mdo.card.webp",
      tags:
        language === "en"
          ? ["Energy", "Monitoring", "ML", "B2G"]
          : ["Энергетика", "Мониторинг", "ML", "B2G"],
    },
    {
      id: "portal-mip",
      title:
        language === "en"
          ? "MIP Portal — my first enterprise"
          : "Портал МИП — первый enterprise",
      description:
        language === "en"
          ? "Ministry of Energy. First time as project manager: team of 10, delivered in 8 months."
          : "Минэнерго, мониторинг инвестпрограмм. Первый раз руководителем проекта: команда 10, сдан за 8 месяцев.",
      datePeriod: "2011-07-01 - 2012-02-28",
      image: "/images/projects/portal-mip.card.webp",
      tags: ["Java", "Oracle", "WebLogic", "JavaScript"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title={
          language === "en"
            ? "Projects — Ivan Donchenko"
            : "Проекты — Иван Донченко"
        }
        description={
          language === "en"
            ? "Projects with measurable outcomes, team sizes, and my role in each: Safe City for EMERCOM, Ministry of Energy portals, the RFU platform, loan origination for a fintech, AI in support."
            : "Проекты с измеримым результатом, размером команды и моей ролью: «Безопасный город» для МЧС, порталы Минэнерго, платформа РФС, кредитный конвейер для финтеха, AI в поддержке."
        }
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-4">
          {language === "en" ? "Projects" : "Проекты"}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              hover
              className="overflow-hidden flex flex-col"
            >
              {project.image && (
                <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={461}
                    height={308}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <HiCalendar className="w-4 h-4" />
                  <span>{formatDatePeriod(project.datePeriod, language)}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2 min-h-14 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 h-16 line-clamp-3 text-sm">
                  {project.description}
                </p>
                <TagList tags={project.tags} size="sm" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
