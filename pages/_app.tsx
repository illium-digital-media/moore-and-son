import '@/styles/globals.css';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '../components/sections/Footer';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/index';
import Script from "next/script";
import useLoadGAOnUserInteraction from "@/hooks/useLoadGAOnUserInteraction";

const App = ({ Component, pageProps }: AppProps) => {
  const loadGA = useLoadGAOnUserInteraction();

  return (
    <>
      {loadGA && (
        <>
          <Script
            id="gtm-script"
            src="https://www.googletagmanager.com/gtag/js?id=G-CQRNH0XQM6"
          />
          <Script
            id="gtm-script"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CQRNH0XQM6');
              `,
            }}
          />
        </>
      )}
      
      <Provider store={store}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>

  );
};

export default App;
