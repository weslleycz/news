import Stripe from "stripe";
import { version } from "../../package.json";
import { STRIPE_API_KEY } from "../.env.local";

export const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "ignews",
    version,
  },
});
