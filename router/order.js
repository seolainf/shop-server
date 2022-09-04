import express from "express";
import {
  addOrder,
  deleteOrder,
  getAllOrder,
  getIncome,
  getOrder,
  updateOrder,
} from "../controllers/order.js";

import {
  verifyToken,
  verifyTokenAdmin,
  verifyTokenAuthorization,
} from "../utils/verifyToken.js";

const router = express.Router();

//create cart
router.post("/add", verifyToken, addOrder);
//update carts
router.put("/:id", verifyTokenAdmin, updateOrder);
//delete carts
router.delete("/:id", verifyTokenAdmin, deleteOrder);
//get user orders
router.get("/find/:userId", verifyTokenAuthorization, getOrder);
//get all carts
router.get("/", verifyTokenAuthorization, getAllOrder);
//get monthly income
router.get("/income", verifyTokenAdmin, getIncome);

export default router;
