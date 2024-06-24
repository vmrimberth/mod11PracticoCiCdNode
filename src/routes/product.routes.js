import { Router } from "express";
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from "../controllers/product.controllers.js";

const router = Router();

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post("/products", createProduct);

router.delete("/product/:id", deleteProduct);

router.put("/products/:id", updateProduct);

export default router;