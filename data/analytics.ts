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