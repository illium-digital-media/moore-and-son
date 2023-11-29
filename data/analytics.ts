import { useEffect } from "react";

// utils/useGoogleAnalytics.ts
const useGoogleAnalytics = () => {
    const GA_MEASUREMENT_ID: string = "G-CQRNH0XQM6";
    useEffect(() => {
        // Check if GA script is already added
        if (window.dataLayer) return;

        // Insert Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Initialize dataLayer and gtag function
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID);
    }, [GA_MEASUREMENT_ID]);
};

export default useGoogleAnalytics;


// analytics/gtm.ts
// import { initGTMScriptOnEvent, initGTMScriptWithDelay } from 'analytics/gtm';

// const initGTMScript = (): void => {
//     if ((window as any).didGTMInit) return;

//     // Flag to ensure script does not get added to DOM more than once
//     (window as any).didGTMInit = true;

//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.id = 'gtm-script';
//     script.async = true;
//     script.src = 'https://www.googletagmanager.com/gtag/js?id=G-<your-id-here>';
//     script.onload = () => {
//         window.dataLayer = window.dataLayer || [];
//         function gtag() { dataLayer.push(arguments); }
//         gtag('js', new Date());

//         gtag('config', 'G-<your-id-here>');
//         // This part ensures PageViews is always tracked
//     };

//     document.head.appendChild(script);
// };

// export const initGTMScriptOnEvent = (event: Event): void => {
//     initGTMScript();
//     // Remove the event listener that got triggered
//     event.currentTarget.removeEventListener(event.type, initGTMScriptOnEvent);
// };

// export const INIT_GTM_DELAY = 4000;

// export const initGTMScriptWithDelay = (): void => {
//     return setTimeout(() => {
//         initGTMScript();
//         // Remove all event listeners after the script is loaded
//         document.removeEventListener('scroll', initGTMScriptOnEvent);
//         document.removeEventListener('mousemove', initGTMScriptOnEvent);
//         document.removeEventListener('touchstart', initGTMScriptOnEvent);
//     }, INIT_GTM_DELAY);
// };
