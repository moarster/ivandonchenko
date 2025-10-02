import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { YandexMetrika } from '@/components/YandexMetrika';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { CV } from '@/pages/CV';
import { Projects } from '@/pages/Projects';
import { Project } from '@/pages/Project';
import { BlogSoon } from '@/pages/BlogSoon';
import { BlogPost } from '@/pages/BlogPost';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';


const YANDEX_METRIKA_ID = 104351621;

export function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <BrowserRouter>
                    {YANDEX_METRIKA_ID > 0 && <YandexMetrika counterId={YANDEX_METRIKA_ID} />}
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="cv" element={<CV />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="projects/:slug" element={<Project />} />
                            <Route path="blog" element={<BlogSoon />} />
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