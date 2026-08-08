import { HiArrowRight, HiClipboardList, HiCode, HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/hooks/useLanguage";

export function Home() {
  const { language, t, localePath } = useLanguage();

  const features = [
    {
      icon: <HiUsers className="w-8 h-8" />,
      title: language === "en" ? "People & Team" : "Люди и команда",
      description:
        language === "en"
          ? "Hiring and onboarding, regular 1:1s, grades and mentoring, retention. Built a team from zero to 20 people as CTO; merged two teams into one of 35 with a full stack change and kept 97% of the people."
          : "Наём и онбординг, регулярные 1:1, грейды и менторинг, удержание. Собрал команду с нуля до 20 человек как CTO; объединил два коллектива в команду 35 человек с полной сменой стека и сохранил 97% состава.",
      link: "/cv",
    },
    {
      icon: <HiClipboardList className="w-8 h-8" />,
      title: language === "en" ? "Delivery & Deadlines" : "Delivery и сроки",
      description:
        language === "en"
          ? "Breakdown, effort and schedule estimation together with the team, sprints and releases, backlog and roadmap, risks and escalation, reporting to the client. Safe City for EMERCOM: plan, budget, a team of 15, delivered in 8 months."
          : "Декомпозиция, оценка трудоёмкости и сроков вместе с командой, спринты и релизы, бэклог и roadmap, риски и эскалация, отчётность заказчику. АПК «Безопасный город» для МЧС: план, бюджет, команда 15 человек, сдан за 8 месяцев.",
      link: "/projects",
    },
    {
      icon: <HiCode className="w-8 h-8" />,
      title: language === "en" ? "Engineering & Code" : "Инженерия и код",
      description:
        language === "en"
          ? "Architecture and service boundaries, code review, standards and quality gates, CI/CD, tests, observability, tech debt. 14 years hands-on in Java/Kotlin: on the current loan origination project I write the job workers, delegates, and the test layer myself."
          : "Архитектура и границы сервисов, код-ревью, стандарты и quality gates, CI/CD, тесты, observability, техдолг. 14 лет hands-on на Java/Kotlin: на текущем проекте кредитного конвейера сам пишу Job Workers, делегаты и слой автотестов.",
      link: "/services",
    },
  ];

  const results = [
    {
      value: "97%",
      label:
        language === "en"
          ? "of the team retained when two teams merged into one of 35 with a full stack change — AS SIOI, Ministry of Energy"
          : "состава сохранено при слиянии двух коллективов в команду 35 человек со сменой стека — АС СиОИ, Минэнерго России",
    },
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
            ? "Ivan Donchenko — Head of Development · Full-cycle Technical Leader"
            : "Иван Донченко — Лидер разработки · Технический руководитель полного цикла"
        }
        description={
          language === "en"
            ? "Technical leader who owns the whole vertical: client, requirements, architecture, estimation, releases, people and code review — and writes code. 15 years in IT, 14 leading teams of 5 to 40 people."
            : "Технический руководитель, который закрывает всю вертикаль: заказчик, требования, архитектура, оценка, релизы, люди и код-ревью — и сам пишет код. 15 лет в IT, 14 лет руководства командами от 5 до 40 человек."
        }
      />
      {/* Hero Section */}
      <section className="text-center pt-20 pb-10">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-slate-50 mb-6">
          {language === "en" ? "Head of Development" : "Лидер разработки"}
        </h1>
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-cinnabar-500 dark:bg-cinnabar-400" />
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          {language === "en"
            ? "Full-cycle technical leader: client, requirements, architecture, breakdown and deadlines, people and code review. Teams from 5 to 40 people — and I still write code myself."
            : "Технический руководитель полного цикла: заказчик, требования, архитектура, декомпозиция и сроки, люди и код-ревью. Команды от 5 до 40 человек — и я по-прежнему пишу код сам."}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
            ? "Looking for a head of development?"
            : "Ищете руководителя разработки?"}
        </h2>
        <p className="text-xl mb-6 opacity-90">
          {language === "en"
            ? "A “team lead” is often understood as the strongest developer in one track — backend, frontend, analysis. That is not my role. I am needed either above such leads, or instead of them, when there is one cross-functional team and someone has to own the whole result."
            : "Под тимлидом часто понимают сильнейшего разработчика одного направления — бэка, фронта, анализа. Это не моя роль. Я нужен либо над такими тимлидами, либо вместо них, когда команда одна и кросс-функциональная, и кто-то должен держать результат целиком."}
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to={localePath("/contact")}>{t("discussCase")}</Link>
        </Button>
      </section>
    </div>
  );
}
