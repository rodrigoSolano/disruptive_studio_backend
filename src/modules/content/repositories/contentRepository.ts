import { Content } from "../models/contentModel";
import { CreateContentDto, UpdateContentDto } from "../dtos/contentDto";

export class ContentRepository {
  static async createContent(data: CreateContentDto) {
    const content = new Content(data);
    return content.save();
  }

  static async listContent(themes: string[] = []) {
    return Content.find(themes.length ? { theme_id: { $in: themes } } : {})
      .populate("theme_id")
      .populate("createdBy", "username");
  }

  static async getContentById(id: string) {
    return Content.findById(id)
      .populate("theme_id")
      .populate("createdBy", "username");
  }

  static async updateContent(id: string, data: UpdateContentDto) {
    return Content.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteContent(id: string) {
    return Content.findByIdAndDelete(id);
  }
}
