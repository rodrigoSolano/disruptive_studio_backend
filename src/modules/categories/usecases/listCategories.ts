import { CategoryRepository } from "../repositories/categoryRepository";

export async function listCategories() {
  return CategoryRepository.listCategories();
}
