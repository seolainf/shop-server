import express from "express";
import {
  addProducts,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../controllers/products.js";

import {
  verifyToken,
  verifyTokenAdmin,
  verifyTokenAuthorization,
} from "../utils/verifyToken.js";

const router = express.Router();

//create products
router.post("/add", verifyTokenAdmin, addProducts);
//update products
router.put("/:id", verifyTokenAdmin, updateProduct);
//delete products
router.delete("/:id", verifyTokenAdmin, deleteProduct);
//get a products
router.get("/find/:id", getProduct);
//get all products
router.get("/", getAllProduct);
/* //search
router.get("/", getAllProduct); */

export default router;
