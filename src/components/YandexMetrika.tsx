import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface YandexMetrikaProps {
    counterId: number;
}

declare global {
    interface Window {
        ym?: (id: number, method: string, ...params: unknown[]) => void;
    }
}

export function YandexMetrika({ counterId }: YandexMetrikaProps) {
    const location = useLocation();

    useEffect(() => {
        // Initialize Yandex Metrika
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${counterId}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
        `;
        document.head.appendChild(script);

        // Noscript fallback
        const noscript = document.createElement('noscript');
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = `https://mc.yandex.ru/watch/${counterId}`;
        img.style.position = 'absolute';
        img.style.left = '-9999px';
        img.alt = '';
        div.appendChild(img);
        noscript.appendChild(div);
        document.body.appendChild(noscript);

        return () => {
            document.head.removeChild(script);
            document.body.removeChild(noscript);
        };
    }, [counterId]);

    // Track page views on route change
    useEffect(() => {
        if (window.ym) {
            window.ym(counterId, 'hit', location.pathname + location.search);
        }
    }, [location, counterId]);

    return null;
}
