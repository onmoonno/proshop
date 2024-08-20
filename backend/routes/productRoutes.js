import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

// router.route('endpoint').method(controller)
// Get all the products
router.route("/").get(getProducts);
// Get product by Id
router.route("/:id").get(getProductById);

export default router;
