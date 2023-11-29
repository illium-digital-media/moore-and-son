import '@/styles/globals.css';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '../components/sections/Footer';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/index';
import { useEffect } from 'react';
import { initGTMScriptOnEvent, initGTMScriptWithDelay } from '../data/analytics';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Init GTM script once
    const timer = initGTMScriptWithDelay();
    document.addEventListener('scroll', initGTMScriptOnEvent);
    document.addEventListener('mousemove', initGTMScriptOnEvent);
    document.addEventListener('touchstart', initGTMScriptOnEvent);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('scroll', initGTMScriptOnEvent);
      document.removeEventListener('mousemove', initGTMScriptOnEvent);
      document.removeEventListener('touchstart', initGTMScriptOnEvent);
    };
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

export default App;
