import { YandexMetrika } from "@/components/YandexMetrika";
import { Layout } from "@/components/layout/Layout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { About } from "@/pages/About";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { CV } from "@/pages/CV";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Projects } from "@/pages/Projects";
import { Services } from "@/pages/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const YANDEX_METRIKA_ID = Number(import.meta.env.VITE_YANDEX_METRIKA_ID) || 0;

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          {YANDEX_METRIKA_ID > 0 && (
            <YandexMetrika counterId={YANDEX_METRIKA_ID} />
          )}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="cv" element={<CV />} />
              <Route path="projects" element={<Projects />} />
              <Route path="services" element={<Services />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
