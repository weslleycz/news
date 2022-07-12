import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import Styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: String;
    amount: Number;
  };
}

const Home: NextPage = ({ product }: HomeProps) => {
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
            <span>for {product.amount} month.</span>
          </p>
          <SubscribeButton priceId={product.priceId}></SubscribeButton>
        </section>
        <img src="/images/Mulher.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1LKTucEZqcAoXWoeJqcOrzz9");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 Houras
  };
};

export default Home;
