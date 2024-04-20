import { Request, Response } from "express";
import * as CategoryService from "../usecases/listCategories";
import * as CreateCategoryService from "../usecases/createCategory";
import * as UpdateCategoryService from "../usecases/updateCategory";
import * as DeleteCategoryService from "../usecases/deleteCategory";

export async function createCategory(req: Request, res: Response) {
  try {
    const category = await CreateCategoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating category", error: error.message });
  }
}

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await CategoryService.listCategories();
    res.json(categories);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error listing categories", error: error.message });
  }
}

export async function updateCategory(req: Request, res: Response) {
  try {
    const updatedCategory = await UpdateCategoryService.updateCategory(
      req.params.id,
      req.body
    );
    res.json(updatedCategory);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating category", error: error.message });
  }
}

export async function deleteCategory(req: Request, res: Response) {
  try {
    await DeleteCategoryService.deleteCategory(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error deleting category", error: error.message });
  }
}
