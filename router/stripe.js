import express from "express";
import { createError } from "../err.js";
import Stripe from "stripe";

const stripe = Stripe(
  "sk_test_51Lc9P2Bfkg2NnsiYV5wprUVs2FdyaJiqb7jPl7EK9bLdAdFiecv89Pc0BIfjqBV2RhZfRCh6zhiG22je61OhhJ3200kA47u99y"
);

const router = express.Router();

router.post("/payment", (req, res, next) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        next(createError(500, stripeErr));
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;
