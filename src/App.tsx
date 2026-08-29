import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { YandexMetrika } from "@/components/YandexMetrika";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { Contact } from "@/pages/Contact";
import { CV } from "@/pages/CV";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";

const YANDEX_METRIKA_ID = Number(import.meta.env.VITE_YANDEX_METRIKA_ID) || 0;

const pageRoutes = (
  <>
    <Route index element={<Home />} />
    <Route path="cv" element={<CV />} />
    <Route path="blog" element={<Blog />} />
    <Route path="blog/:slug" element={<BlogPost />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LanguageProvider>
          {YANDEX_METRIKA_ID > 0 && (
            <YandexMetrika counterId={YANDEX_METRIKA_ID} />
          )}
          <Routes>
            <Route path="/" element={<Layout />}>
              {pageRoutes}
            </Route>
            <Route path="/en" element={<Layout />}>
              {pageRoutes}
            </Route>
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
