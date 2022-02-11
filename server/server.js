require("dotenv").config();

const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.use(express.json());
app.use(express.static("public"));
app.post("/payment", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "ngn",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "localhost:3000/success",
    cancel_url: "localhost:3000/cancel",
  });
  res.redirect(303, session.url);
});

app.listen(5000, () => console.log(`Listening on port ${5000}`));
