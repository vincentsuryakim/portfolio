import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { firebase } from "../firebase/firebaseClient"

import { LocationProvider } from "../contexts/LocationProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vincent&apos;s Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Portfolio of Vincent Suryakim" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LocationProvider>
        <Component {...pageProps} />
      </LocationProvider>
    </>
  );
}
export default MyApp;
