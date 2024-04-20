import { Router } from "express";
import { body } from "express-validator";

import { UserDomain } from "../domain/user";

import * as UserController from "../controllers/userController";

const router = Router();

router.post(
  "/register",
  [
    body("username").isString().trim().not().isEmpty(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
    body("role").custom((value) => UserDomain.validateRole(value)),
  ],
  UserController.createUser
);

router.get("/", UserController.listUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
