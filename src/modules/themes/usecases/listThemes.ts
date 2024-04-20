import { ThemeRepository } from "../repositories/themeRepository";

export async function listThemes() {
  return ThemeRepository.listThemes();
}
