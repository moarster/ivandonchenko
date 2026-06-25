import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { TagList } from "@/components/ui/TagList";
import { useLanguage } from "@/hooks/useLanguage";
import { getBlogPost } from "@/utils/blog";
import { formatDate } from "@/utils/dateFormatter";
import { HiArrowLeft, HiCalendar, HiClock } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";

export function BlogPost() {
  const { language, t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug, language) : null;

  const backButton = (
    <Button variant="ghost" asChild className="mb-8">
      <Link to="/blog">
        <HiArrowLeft className="w-4 h-4 mr-2" />
        {t("backToBlog")}
      </Link>
    </Button>
  );

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {backButton}
          <p className="text-slate-600 dark:text-slate-400">
            {t("postNotFound")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title={`${post.title} — Ivan Donchenko`}
        description={post.description}
        type="article"
      />
      <div className="max-w-3xl mx-auto">
        {backButton}
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-display font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-4">
              <span className="flex items-center gap-2">
                <HiCalendar className="w-4 h-4" />
                {formatDate(post.date, language)}
              </span>
              <span className="flex items-center gap-2">
                <HiClock className="w-4 h-4" />
                {post.readTime} {t("minRead")}
              </span>
            </div>
            {post.tags.length > 0 && <TagList tags={post.tags} size="sm" />}
          </header>
          <MarkdownRenderer content={post.content} />
        </article>
      </div>
    </div>
  );
}
