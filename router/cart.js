import express from "express";
import {
  addCart,
  deleteCart,
  getAllCart,
  getCart,
  updateCart,
} from "../controllers/carts.js";

import {
  verifyToken,
  verifyTokenAdmin,
  verifyTokenAuthorization,
} from "../utils/verifyToken.js";

const router = express.Router();

//create cart
router.post("/add", verifyToken, addCart);
//update carts
router.put("/:id", verifyTokenAuthorization, updateCart);
//delete carts
router.delete("/:id", verifyTokenAuthorization, deleteCart);
//get user carts
router.get("/find/:userId", verifyTokenAuthorization, getCart);
//get all carts
router.get("/", verifyTokenAuthorization, getAllCart);
/* //search
router.get("/", getAllProduct); */

export default router;
