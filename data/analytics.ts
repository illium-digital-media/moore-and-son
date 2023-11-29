// GTMUtils.ts
const GA_MEASUREMENT_ID: string = "G-CQRNH0XQM6";

const loadGTMScript = () => {
    if (document.getElementById('gtm-script')) return;

    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

    console.log('here');
    script.onload = () => {
        console.log('GTM script has loaded.');
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID);
    };

    script.onerror = (error) => {
        console.error('Error loading GTM script:', error);
    };

    document.head.appendChild(script);
};

export const initGTMScriptOnEvent = (event: Event): void => {
    loadGTMScript();
    // Remove the event listener that got triggered
    event.currentTarget?.removeEventListener(event.type, initGTMScriptOnEvent);
};

export const INIT_GTM_DELAY: number = 4000;

export const initGTMScriptWithDelay = (): number => {
    return window.setTimeout(() => {
        loadGTMScript();

        // Remove all event listeners after the script is loaded
        document.removeEventListener('scroll', initGTMScriptOnEvent);
        document.removeEventListener('mousemove', initGTMScriptOnEvent);
        document.removeEventListener('touchstart', initGTMScriptOnEvent);
    }, INIT_GTM_DELAY);
};
