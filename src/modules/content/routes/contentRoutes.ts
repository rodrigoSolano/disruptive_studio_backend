import { Router } from "express";
import * as ContentController from "../controllers/contentController";

const router = Router();

router.post("/", ContentController.createContent);
router.get("/", ContentController.listContent);
router.put("/:id", ContentController.updateContent);
router.delete("/:id", ContentController.deleteContent);

export default router;
