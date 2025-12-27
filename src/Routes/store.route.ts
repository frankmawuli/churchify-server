import express from "express";
import protectedRoute from "../middleware/protected";
import {
  addProductToStore,
  updateStoreProduct,
  deleteStoreProduct,
  getAllStoreProducts,
  getSingleStoreProduct,
} from "../Controllers/store.controller";

const router = express.Router();

// Store product management routes
router.post("/:churchId/products", protectedRoute, addProductToStore);
router.put("/:productId", protectedRoute, updateStoreProduct);
router.delete("/:productId", protectedRoute, deleteStoreProduct);
router.get("/:churchId/products", getAllStoreProducts);
router.get("/:productId", getSingleStoreProduct);

export default router;
