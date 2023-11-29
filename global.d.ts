// global.d.ts

// Extend the Window interface globally
interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
  