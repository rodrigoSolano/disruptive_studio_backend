import { ContentRepository } from "../repositories/contentRepository";

export async function deleteContent(id: string) {
  return ContentRepository.deleteContent(id);
}
