import { signIn, useSession } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import Styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: String;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { data: session } = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn("github");
      return;
    }
    try {
      const response = await api.post("/subscribe");
      const { sessionid } = response.data;
      const stripe = await getStripeJs();

      console.log(sessionid);

      await stripe?.redirectToCheckout({ sessionId: sessionid });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleSubscribe}
        className={Styles.subscribeButton}
      >
        Subscribe now
      </button>
    </>
  );
};
