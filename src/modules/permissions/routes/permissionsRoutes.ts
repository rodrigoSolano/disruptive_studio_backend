import { Router } from "express";
import * as PermissionsController from "../controllers/permissionsController";

const router = Router();

router.get("/", PermissionsController.listPermissions);
router.put("/:id/permissions", PermissionsController.updatePermissions);

export default router;
