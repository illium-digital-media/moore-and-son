import { useEffect } from "react";

const initGTMScript = () => {
    const GA_MEASUREMENT_ID: string = "G-CQRNH0XQM6";
    useEffect(() => {
        // Check if GA script is already added
        if (window.dataLayer) return;

        // Insert Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag() {
                window.dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config', GA_MEASUREMENT_ID);
        };

        document.head.appendChild(script);

    }, [GA_MEASUREMENT_ID]);
};

export const initGTMScriptOnEvent = (event: Event): void => {
    initGTMScript();
    // Remove the event listener that got triggered
    event.currentTarget?.removeEventListener(event.type, initGTMScriptOnEvent);
};

const INIT_GTM_DELAY: number = 4000;

export const initGTMScriptWithDelay = (): number => {
  return window.setTimeout(() => {
    initGTMScript();
    
    document.removeEventListener('scroll', initGTMScriptOnEvent);
    document.removeEventListener('mousemove', initGTMScriptOnEvent);
    document.removeEventListener('touchstart', initGTMScriptOnEvent);
  }, INIT_GTM_DELAY);
};

export default initGTMScript;