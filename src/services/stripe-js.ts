import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLIC_KEY } from "../.env.local";

export const getStripeJs = async () => {
  const stripeJs = await loadStripe(STRIPE_PUBLIC_KEY);

  return stripeJs;
};
