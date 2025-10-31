import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

// Base path: /api/categories
router.post("/add", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/edit/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);

export default router;
