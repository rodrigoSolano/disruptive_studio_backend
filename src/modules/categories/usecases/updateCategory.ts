import { UpdateCategoryDto } from "../dtos/categoryDto";
import { CategoryRepository } from "../repositories/categoryRepository";

export async function updateCategory(categoryId: string, categoryData: UpdateCategoryDto) {
  return CategoryRepository.updateCategory(categoryId, categoryData);
}