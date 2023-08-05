import { useEffect } from "react";
import { useRouter } from "next/router";
import "styles/globals.css";
import * as gtag from "utils/gtag";
import { StateProvider } from "utils/store.js";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
};

export default App;
