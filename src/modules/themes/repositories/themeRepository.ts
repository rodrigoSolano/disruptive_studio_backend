import { Theme } from "../models/themeModel";
import { CreateThemeDto, UpdateThemeDto } from "../dtos/themeDto";

export class ThemeRepository {
  static async createTheme(data: CreateThemeDto) {
    const theme = new Theme(data);
    return theme.save();
  }

  static async listThemes() {
    return Theme.find().populate("category_id");
  }

  static async getThemeById(id: string) {
    return Theme.findById(id).populate("category_id");
  }

  static async updateTheme(id: string, data: UpdateThemeDto) {
    return Theme.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTheme(id: string) {
    return Theme.findByIdAndDelete(id);
  }

  static async searchTheme(query: string) {
    return Theme.find({ name: new RegExp(query, "i") });
  }
}
