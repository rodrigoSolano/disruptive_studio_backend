import { ContentRepository } from "../repositories/contentRepository";

export async function listContent(themes?: string[]) {
  return ContentRepository.listContent();
}
