import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export function NotFound() {
  const { language, localePath } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-9xl font-display font-bold text-cinnabar-500 dark:text-cinnabar-400 mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold mb-4">
        {language === "en" ? "Page Not Found" : "Страница не найдена"}
      </h2>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
        {language === "en"
          ? "The page you're looking for doesn't exist or has been moved."
          : "Страница, которую вы ищете, не существует или была перемещена."}
      </p>
      <Button size="lg" asChild>
        <Link to={localePath("/")}>
          <HiHome className="w-5 h-5 mr-2" />
          {language === "en" ? "Go Home" : "На главную"}
        </Link>
      </Button>
    </div>
  );
}
