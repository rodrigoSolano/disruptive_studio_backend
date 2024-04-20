import { UpdateContentDto } from "../dtos/contentDto";
import { ContentRepository } from "../repositories/contentRepository";

export async function updateContent(id: string, content: UpdateContentDto) {
  return ContentRepository.updateContent(id, content);
}
