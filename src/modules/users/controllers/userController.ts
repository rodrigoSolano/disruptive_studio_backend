import { Request, Response } from "express";
import { validationResult } from "express-validator";
import * as UserService from "../usecases/listUsers";
import * as CreateUserService from "../usecases/createUser";
import * as UpdateUserService from "../usecases/updateUser";
import * as DeleteUserService from "../usecases/deleteUser";
import * as GetUserByIdService from "../usecases/getUserById";

export async function createUser(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await CreateUserService.createUser(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
}

export async function listUsers(req: Request, res: Response) {
  try {
    const users = await UserService.listUsers();
    res.json(users);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const user = await GetUserByIdService.getUser(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
}

export async function updateUser(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedUser = await UpdateUserService.updateUser(
      req.params.id,
      req.body
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const result = await DeleteUserService.deleteUser(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).send();
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
}
