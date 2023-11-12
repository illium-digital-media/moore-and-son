import '@/styles/globals.css';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '../components/sections/Footer';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/index';

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <Provider store={store}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Provider>
  );
};

export default App;
