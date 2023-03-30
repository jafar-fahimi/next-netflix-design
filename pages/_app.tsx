import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css"; // be def its compiled tailwindcss is added
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix Design</title>
        <link rel="icon" href="/netflix_logo_icon.ico" />
      </Head>
      <RecoilRoot>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
