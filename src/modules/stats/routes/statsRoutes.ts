import { Router } from "express";
import * as StatsController from "../controllers/statsController";

const router = Router();

router.get("/content", StatsController.getContentStats);

export default router;
