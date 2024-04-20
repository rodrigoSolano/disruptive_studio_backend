import { CategoryRepository } from "../repositories/categoryRepository";

export async function deleteCategory(categoryId: string) {
  return CategoryRepository.deleteCategory(categoryId);
}