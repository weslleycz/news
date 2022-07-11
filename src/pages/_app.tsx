import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Header></Header>
    </>
  );
};

export default MyApp;
