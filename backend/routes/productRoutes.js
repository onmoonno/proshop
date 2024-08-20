import express from "express";
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
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

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       return res.json(product);
//     }
//     res.status(404);
//     throw new Error("Resource not found"); // More decent errorHandler
//   })
// );

export default router;
