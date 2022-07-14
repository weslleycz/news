import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { SessionProvider } from "next-auth/react"
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
     <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <Header></Header>
      </SessionProvider>
    </>
  );
};

export default MyApp;
