import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./router/user.js";
import authRoutes from "./router/auth.js";
import productRoutes from "./router/product.js";
import cartRoutes from "./router/cart.js";
import orderRoutes from "./router/order.js";
import stripeRoutes from "./router/stripe.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then((res) => console.log("connect to server"))
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", stripeRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT || 8000, (req, res) => {
  connect();
  console.log("Backend is running!");
});
