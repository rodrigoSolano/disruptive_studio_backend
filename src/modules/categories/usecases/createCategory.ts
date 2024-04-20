import { CreateCategoryDto } from "../dtos/categoryDto";
import { CategoryRepository } from "../repositories/categoryRepository";

export async function createCategory(categoryData: CreateCategoryDto) {
  return CategoryRepository.createCategory(categoryData);
}
