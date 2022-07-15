import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { HOST } from "../../.env.local";
import { stripe } from "../../services/stripe";
import { prismaClient } from "../../services/prismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  const stripeCustomer = await stripe.customers.create({
    email: session?.user?.email,
  });

  


  if (req.method === "POST") {
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [{ price: "price_1LKTucEZqcAoXWoeJqcOrzz9", quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: `${HOST}/posts`,
      cancel_url: HOST,
    });
    return res.status(200).json({ sessionid: stripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
