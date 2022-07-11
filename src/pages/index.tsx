import type { NextPage } from "next";
import Styles from "./home.module.scss";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Ig.News</title>
      </Head>

      <main className={Styles.contentContainer}>
        <section className={Styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get acess to all the publications
            <br />
            <span>for $9.90 month.</span>
          </p>
          <SubscribeButton></SubscribeButton>
        </section>
        <img src="/images/Mulher.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export default Home;
