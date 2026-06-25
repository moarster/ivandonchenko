import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";
import { useLanguage } from "@/hooks/useLanguage";
import { getBlogPosts } from "@/utils/blog";
import { formatDate } from "@/utils/dateFormatter";
import { HiCalendar, HiClock } from "react-icons/hi";
import { Link } from "react-router-dom";

export function Blog() {
  const { language, t, localePath } = useLanguage();
  const posts = getBlogPosts(language);

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title={
          language === "en" ? "Blog — Ivan Donchenko" : "Блог — Иван Донченко"
        }
        description={t("blogSubtitle")}
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-4">{t("blog")}</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
          {t("blogSubtitle")}
        </p>

        {posts.length === 0 ? (
          <p className="text-slate-600 dark:text-slate-400">{t("noPosts")}</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <Card key={post.slug} hover className="p-6">
                <Link to={localePath(`/blog/${post.slug}`)} className="block">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-2">
                      <HiCalendar className="w-4 h-4" />
                      {formatDate(post.date, language)}
                    </span>
                    <span className="flex items-center gap-2">
                      <HiClock className="w-4 h-4" />
                      {post.readTime} {t("minRead")}
                    </span>
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-3 hover:text-primary-500 transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {post.description}
                    </p>
                  )}
                  {post.tags.length > 0 && (
                    <TagList tags={post.tags} size="sm" />
                  )}
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
