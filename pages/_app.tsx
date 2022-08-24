import "../styles/globals.css";
import type {AppProps} from "next/app";

import ReactGA from "react-ga";
import {ThemeProvider} from "next-themes";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactGA.initialize(process.env.NEXT_PUBLIC_API_GA_KEY || "");

function MyApp({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
