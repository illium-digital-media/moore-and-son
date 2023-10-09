import "@/styles/globals.css";
import MainNavigation from "@/components/Navigation/MainNavigation";
import { DarkModeProvider } from "../components/DarkModeContext";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "../components/sections/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DarkModeProvider>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </DarkModeProvider>
    </>
  );
}
