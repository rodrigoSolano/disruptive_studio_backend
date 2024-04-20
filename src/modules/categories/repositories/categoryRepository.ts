import { Category } from "../models/categoryModel";
import { CreateCategoryDto, UpdateCategoryDto } from "../dtos/categoryDto";

export class CategoryRepository {
  static async createCategory(data: CreateCategoryDto) {
    const category = new Category(data);
    return category.save();
  }

  static async listCategories() {
    return Category.find();
  }

  static async getCategoryById(id: string) {
    return Category.findById(id);
  }

  static async updateCategory(id: string, data: UpdateCategoryDto) {
    return Category.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteCategory(id: string) {
    return Category.findByIdAndDelete(id);
  }
}
