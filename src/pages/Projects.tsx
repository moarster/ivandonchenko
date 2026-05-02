import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";
import { useLanguage } from "@/hooks/useLanguage";
import { formatDatePeriod } from "@/utils/dateFormatter";
import { HiCalendar } from "react-icons/hi";

export function Projects() {
  const { language } = useLanguage();

  const projects = [
    {
      id: "gas-ps",
      title: language === "en" ? "GAS PS" : "ГАС ПС",
      description:
        language === "en"
          ? "MDM and metadata component within the GAS PS Portal of the General Prosecutor's Office"
          : "Подсистема НСИ и метаданных в составе Портала ГАС ПС Генпрокуратуры РФ",
      datePeriod: "2021-10-15 - 2023-01-31",
      image: "/images/projects/gas-ps.card.png",
      tags: ["B2G", "Microservices", "MDM", "Low-Code"],
    },
    {
      id: "rfs",
      title: language === "en" ? "RFU Information System" : "ИС РФС",
      description:
        language === "en"
          ? "Digital transformation of the Russian Football Union"
          : "Цифровая трансформация Российского футбольного союза",
      datePeriod: "2020-09-01 - 2021-06-21",
      image: "/images/projects/rfs.card.png",
      tags: ["Microservices", "MDM", "Low-Code"],
    },
    {
      id: "soarse",
      title: "Soarse",
      description:
        language === "en"
          ? "Low-Code platform for business automation and corporate information systems"
          : "Low-Code платформа для автоматизации бизнеса и корпоративных информационных систем",
      datePeriod: "2020-01-01 - 2023-02-20",
      image: "/images/projects/soarse.card.png",
      tags: ["Low-Code", "BPM", "MDM", "Spring Cloud", "React"],
    },
    {
      id: "iek-spb",
      title: language === "en" ? "RS IEC" : "РС ИЭК",
      description:
        language === "en"
          ? "Digital platform for engineering and energy infrastructure of St. Petersburg"
          : "Инженерно-энергетический комплекс Санкт-Петербурга",
      datePeriod: "2017-10-01 - 2020-01-31",
      image: "/images/projects/iek-spb.card.png",
      tags: ["Java", "Spring", "PostgreSQL", "GIS", "B2G"],
    },
    {
      id: "apk-bg",
      title: language === "en" ? "Safe City Sakhalin" : "АПК БГ",
      description:
        language === "en"
          ? "Regional public safety system with video surveillance and analytics"
          : "Аппаратно-программный комплекс \"Безопасный Город\" Сахалинская область",
      datePeriod: "2017-03-01 - 2017-11-01",
      image: "/images/projects/apk-bg.card.png",
      tags: ["Java Spring", "React", "PostgreSQL", "B2G"],
    },
    {
      id: "as-sioi",
      title: language === "en" ? "AS SIOI" : "АС СиОИ",
      description:
        language === "en"
          ? "Reporting and analytics system for Russian energy sector investments"
          : "Система сбора и обработки отчетности в электроэнергетике",
      datePeriod: "2013-12-01 - 2017-02-28",
      image: "/images/projects/as-sioi.card.png",
      tags: ["Java", "Oracle", "SAP BO", "Data Engineering"],
    },
    {
      id: "portal-mdo",
      title: language === "en" ? "Portal MDO" : "Портал МДО",
      description:
        language === "en"
          ? "Portal for monitoring investment programs in the energy sector"
          : "Портал мониторинга действующих объектов электроэнергетике",
      datePeriod: "2012-01-01 - 2017-02-21",
      image: "/images/projects/portal-mdo.card.png",
      tags:
        language === "en"
          ? ["Energy", "Monitoring", "B2G"]
          : ["Энергетика", "Мониторинг", "B2G"],
    },
    {
      id: "portal-mip",
      title: language === "en" ? "MIP Portal" : "Портал МИП",
      description:
        language === "en"
          ? "Portal for energy sector investment monitoring with video surveillance"
          : "Портал мониторинга инвестиционных программ в электроэнергетике",
      datePeriod: "2011-07-01 - 2012-02-28",
      image: "/images/projects/portal-mip.card.png",
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
            ? "Portfolio of enterprise projects: government systems, energy platforms, digital transformation, and low-code solutions."
            : "Портфолио корпоративных проектов: госсистемы, энергетические платформы, цифровая трансформация и low-code решения."
        }
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-4">
          {language === "en" ? "Projects" : "Проекты"}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
          {language === "en"
            ? "Major projects I've been lucky to be part of"
            : "Крупные проекты, в которых мне посчастливилось поучаствовать"}
        </p>

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
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <HiCalendar className="w-4 h-4" />
                  <span>{formatDatePeriod(project.datePeriod, language)}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2 h-6 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 h-16 line-clamp-2 text-sm">
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
