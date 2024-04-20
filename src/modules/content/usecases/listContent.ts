import { ContentRepository } from "../repositories/contentRepository";

export async function listContent() {
  return ContentRepository.listContent();
}
