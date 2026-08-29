import { HiArrowRight, HiClipboardList, HiCode, HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/hooks/useLanguage";
import { pageMeta, personJsonLd } from "@/utils/seo";

export function Home() {
  const { language, t, localePath } = useLanguage();

  const features = [
    {
      icon: <HiUsers className="w-8 h-8" />,
      title: language === "en" ? "People & Team" : "Люди и команда",
      description:
        language === "en"
          ? "Hiring and onboarding, regular 1:1s, career progression and mentoring, and retention. I build cohesive teams with a healthy, supportive culture."
          : "Наём и онбординг, регулярные 1:1, грейды и менторинг, удержание. Формирую теплый коллектив со здоровой атмосферой.",
      link: "/cv",
    },
    {
      icon: <HiClipboardList className="w-8 h-8" />,
      title: language === "en" ? "Delivery & Deadlines" : "Delivery и сроки",
      description:
        language === "en"
          ? "Work decomposition, effort and timeline estimation, sprint and release planning, backlog and roadmap management, risk management and escalation, and customer reporting."
          : "Декомпозиция, оценка трудоёмкости и сроков, спринты и релизы, бэклог и roadmap, риски и эскалация, отчётность заказчику.",
      link: "/cv",
    },
    {
      icon: <HiCode className="w-8 h-8" />,
      title: language === "en" ? "Engineering & Code" : "Инженерия и код",
      description:
        language === "en"
          ? "Service architecture and boundaries, development and code reviews, engineering standards and quality gates, CI/CD, testing, observability, and technical debt. Hands-on engineering is an integral part of the role."
          : "Архитектура и границы сервисов, разработка и код-ревью, стандарты и quality gates, CI/CD, тесты, observability, техдолг. Hands-on практика - неотъемлемая часть работы.",
      link: "/cv",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO {...pageMeta("/", language)} jsonLd={personJsonLd(language)} />
      {/* Hero Section */}
      <section className="grid items-center gap-10 pt-16 pb-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-slate-50 mb-6">
            {language === "en" ? "Head of Development" : "Лидер разработки"}
          </h1>
          <div className="mx-auto md:mx-0 mb-6 h-1 w-20 rounded-full bg-cinnabar-500 dark:bg-cinnabar-400" />
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0">
            {language === "en"
              ? "A technical lead capable of owning an entire area end-to-end — from sales and customer relations through requirements, architecture, delivery, people, development, testing, and support."
              : "Технический руководитель, способный взять на себя задачи целого направление: продажи, заказчик, требования, архитектура, сроки, люди, разработка, тестирование, поддержка."}
          </p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <Button size="lg" asChild>
              <Link to={localePath("/contact")}>
                {t("discussCase")}
                <HiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to={localePath("/cv")}>{t("seeCv")}</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
            {t("reply24h")}
          </p>
        </div>
        {/* Width and height are set so the hero does not reflow while the
            portrait loads: it is the largest element above the fold. */}
        <picture>
          <source srcSet="/images/userpic.webp" type="image/webp" />
          <img
            src="/images/userpic.jpg"
            alt={language === "en" ? "Ivan Donchenko" : "Иван Донченко"}
            width={384}
            height={384}
            fetchPriority="high"
            className="mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-84 md:h-84 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-xl"
          />
        </picture>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8 py-12">
        {features.map((feature) => (
          <Card key={feature.title} hover className="p-6">
            <div className="text-primary-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-display font-bold mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {feature.description}
            </p>
          </Card>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white my-12">
        <h2 className="text-3xl font-display font-bold mb-4">
          {language === "en"
            ? "Looking for a head of development?"
            : "Ищете руководителя разработки?"}
        </h2>

        <Button size="lg" variant="secondary" asChild>
          <Link to={localePath("/contact")}>{t("discussCase")}</Link>
        </Button>
      </section>
    </div>
  );
}
