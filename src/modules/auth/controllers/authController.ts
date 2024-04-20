import { Request, Response } from "express";
import { validationResult } from "express-validator";
import * as AuthUseCase from "../usecases/loginUser";
import * as RegisterUseCase from "../usecases/registerUser";
import * as LogoutUseCase from "../usecases/logoutUser";

export async function register(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await RegisterUseCase.registerUser(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const result = await AuthUseCase.loginUser({ email, password });
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export function logout(req: Request, res: Response) {
  const result = LogoutUseCase.logoutUser();
  res.json(result);
}
