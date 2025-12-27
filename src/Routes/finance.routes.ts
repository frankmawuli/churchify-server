import express from "express";
import protectedRoute from "../middleware/protected";
import {
  addTransaction,
  getAllTransactions,
  getSingleTransaction,
} from "../Controllers/church-finance.controller";

const router = express.Router();

// Finance transaction routes
router.post("/church/:churchId/transactions", protectedRoute, addTransaction);
router.get("/church/:churchId/transactions", getAllTransactions);
router.get("/transactions/:transactionId", getSingleTransaction);

export default router;
