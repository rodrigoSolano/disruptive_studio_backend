import { Router } from "express";
import { body } from "express-validator";
import * as AuthController from "../controllers/authController";

const router = Router();

router.post(
  "/register",
  [
    body("username").isString().trim().not().isEmpty(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
    body("role").not().isEmpty(),
  ],
  AuthController.register
);

router.post(
  "/login",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
  ],
  AuthController.login
);

router.get("/logout", AuthController.logout);

export default router;
