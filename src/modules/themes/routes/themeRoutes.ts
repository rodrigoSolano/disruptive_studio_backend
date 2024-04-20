import { Router } from "express";
import * as ThemeController from "../controllers/themeController";

const router = Router();

router.post("/", ThemeController.createTheme);
router.get("/", ThemeController.listThemes);
router.put("/:id", ThemeController.updateTheme);
router.delete("/:id", ThemeController.deleteTheme);
router.get('/search', ThemeController.searchThemes);

export default router;
