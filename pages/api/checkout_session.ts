import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

type Res = {
  session?: Stripe.Checkout.Session;
  message?: string;
  statusCode?: number;
  products?: [];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Res>
) {
  if (req.method === "POST") {
    let session;
    const selectedPlan = req.body;
    try {
      const sessionItem = {
        mode: "subscription",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        line_items: [{ price: selectedPlan.id, quantity: 1 }],
        success_url: `${req.headers.origin}`,
        cancel_url: `${req.headers.origin}/`,
      };
      session = await stripe.checkout.sessions.create(sessionItem);
      // Cannot set headers after they are sent to the client // commented below to avoid the error!
      //   res.setHeader("Content-Type", "application/json");
      //   res.setHeader("Cache-Control", "max-age=180000");
      res.end(JSON.stringify(session) || "");
      //   res.status(200).json({ session });
      return session;
    } catch (err: any) {
      console.error("error! : " + err.message); // alert don't work in server side
      //   res.status(200).json({ message: err });
      //   throw new Error(err);
    }
  }
}
