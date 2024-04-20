import { Router } from "express";
import * as CategoryController from "../controllers/categoryController";

const router = Router();

router.post("/", CategoryController.createCategory);
router.get("/", CategoryController.listCategories);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

export default router;
