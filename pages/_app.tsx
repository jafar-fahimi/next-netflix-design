import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css"; // be def its compiled tailwindcss is added

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
