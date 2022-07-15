import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { HOST } from "../../.env.local";
import { prismaClient } from "../../services/prismaClient";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const session = await getSession({ req });

    const stripeCustomer = await stripe.customers.create({
      email: session?.user?.email,
    });

    const user = await prismaClient.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    let customerId = user?.stripeId;

    if (customerId!= null) {
     const userUpdate = await prismaClient.user.update({
        where: {
          email: session?.user?.email,
        },
        data: {
          stripeId: stripeCustomer.id,
        },
      });
      customerId=userUpdate?.stripeId
    } 

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
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
