import { CreateContentDto } from "../dtos/contentDto";
import { ContentRepository } from "../repositories/contentRepository";

export async function createContent(data: CreateContentDto) {
  return ContentRepository.createContent(data);
}