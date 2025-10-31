import express from "express";
import {
  createRole,
  deleteRole,
  getRoleById,
  getRoles,
  updateRole,
} from "../controllers/RoleController.js";

const router = express.Router();

// Base path: /api/roles
router.post("/add", createRole);
router.get("/", getRoles);
router.get("/:id", getRoleById);
router.put("/edit/:id", updateRole);
router.delete("/delete/:id", deleteRole);

export default router;
