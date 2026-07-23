import { HiArrowRight, HiBriefcase, HiCode, HiCog } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/hooks/useLanguage";

export function Home() {
  const { language, t, localePath } = useLanguage();

  const features = [
    {
      icon: <HiBriefcase className="w-8 h-8" />,
      title:
        language === "en"
          ? "Business Architecture & Analysis"
          : "Бизнес-архитектура и анализ",
      description:
        language === "en"
          ? "From business problem to working system: requirements, process design, architecture, delivery. Fluent in both business and engineering."
          : "От бизнес-задачи до работающей системы: требования, процессы, архитектура, приёмка. Говорю на одном языке с заказчиком и с разработкой.",
      link: "/services",
    },
    {
      icon: <HiCog className="w-8 h-8" />,
      title:
        language === "en"
          ? "Process Automation: BPM + AI"
          : "Автоматизация процессов: BPM + AI",
      description:
        language === "en"
          ? "Camunda and Flowable in production: loan origination, request handling, document workflows. LLM agents where they pay off — e.g., first-line support of an international booking service."
          : "Camunda и Flowable в боевых проектах: кредитные конвейеры, обработка обращений, документооборот. LLM-агенты — там, где они дают эффект: например, в первой линии поддержки международного сервиса бронирования.",
      link: "/projects",
    },
    {
      icon: <HiCode className="w-8 h-8" />,
      title:
        language === "en" ? "Engineering Discipline" : "Инженерная дисциплина",
      description:
        language === "en"
          ? "15 years of engineering background, still hands-on: C4/ADR documentation, testing, observability. AI brings speed; engineering practices guarantee quality."
          : "15 лет инженерного бэкграунда, до сих пор hands-on: документация C4/ADR, тесты, observability. Нейросети ускоряют работу — качество гарантируют инженерные практики.",
      link: "/cv",
    },
  ];

  const results = [
    {
      value: "−30%",
      label:
        language === "en"
          ? "emergency response time — Safe City, EMERCOM"
          : "время реагирования экстренных служб — АПК «Безопасный город», МЧС",
    },
    {
      value: "−40%",
      label:
        language === "en"
          ? "data analysis time across 15,000+ energy facilities — Ministry of Energy"
          : "время анализа данных по 15 000+ энергообъектам — Минэнерго России",
    },
    {
      value: "−60%",
      label:
        language === "en"
          ? "analytical reporting time — St. Petersburg Energy Committee"
          : "время подготовки аналитических отчётов — Комитет по энергетике СПб",
    },
    {
      value: language === "en" ? "4,000+" : "4000+",
      label:
        language === "en"
          ? "users in 85 regions — Russian Football Union platform"
          : "пользователей в 85 регионах — платформа РФС",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title={
          language === "en"
            ? "Ivan Donchenko — Business Architect · Business Process Automation"
            : "Иван Донченко — Бизнес-архитектор · Автоматизация бизнес-процессов"
        }
        description={
          language === "en"
            ? "Business process automation: Camunda, Flowable, AI/LLM agents, integrations, ETL. Business analysis, architecture audit and design. 15 years in IT — from government to fintech."
            : "Автоматизация бизнес-процессов: Camunda, Flowable, AI/LLM-агенты, интеграции, ETL. Бизнес-анализ, аудит и проектирование архитектуры. 15 лет в IT — от Минэнерго до финтеха."
        }
      />
      {/* Hero Section */}
      <section className="text-center pt-20 pb-10">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-slate-50 mb-6">
          {language === "en" ? "Business Architect" : "Бизнес-архитектор"}
        </h1>
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-cinnabar-500 dark:bg-cinnabar-400" />
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          {language === "en"
            ? "15 years of turning business problems into working systems: process automation, AI agents, integrations, and data. From analysis and architecture to launch."
            : "15 лет перевожу задачи бизнеса в работающие системы: автоматизация процессов, AI-агенты, интеграции и данные. От анализа и архитектуры — до запуска."}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" asChild>
            <Link to={localePath("/contact")}>
              {t("discussCase")}
              <HiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link to={localePath("/projects")}>{t("seeCases")}</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
          {t("reply24h")}
        </p>
      </section>

      {/* Trust Bar */}
      <section className="text-center pb-12">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 max-w-3xl mx-auto">
          {language === "en"
            ? "Delivered for: Russian Ministry of Energy · Prosecutor General’s Office · Russian Football Union · Lukoil · EMERCOM · fintech & international services"
            : "Проекты: Минэнерго России · Генпрокуратура РФ · РФС · Лукойл · МЧС · финтех и международные сервисы"}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-500">
          {language === "en"
            ? "Best IT Project in Fuel & Energy 2016 · Global CIO Project of the Year 2021"
            : "«Лучший ИТ-проект в ТЭК» 2016 · «Проект года» Global CIO 2021"}
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8 py-12">
        {features.map((feature) => (
          <Card key={feature.link} hover className="p-6">
            <div className="text-primary-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-display font-bold mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {feature.description}
            </p>
            <Link
              to={localePath(feature.link)}
              className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-2"
            >
              {t("readMore")}
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        ))}
      </section>

      {/* Proven Results */}
      <section className="py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result) => (
            <Card key={result.value} className="p-6 text-center">
              <div className="text-3xl font-display font-bold text-primary-500 mb-2">
                {result.value}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {result.label}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white my-12">
        <h2 className="text-3xl font-display font-bold mb-4">
          {language === "en"
            ? "Have a business problem without a spec?"
            : "Есть бизнес-задача без готового ТЗ?"}
        </h2>
        <p className="text-xl mb-6 opacity-90">
          {language === "en"
            ? "That’s exactly where I usually start. Describe the goal in your own words — I’ll propose how to turn it into a working system."
            : "Именно с этого я обычно и начинаю. Опишите цель своими словами — предложу, как превратить её в работающую систему."}
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to={localePath("/contact")}>{t("discussCase")}</Link>
        </Button>
      </section>
    </div>
  );
}
