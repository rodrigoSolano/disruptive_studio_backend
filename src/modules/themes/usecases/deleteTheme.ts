import { ThemeRepository } from "../repositories/themeRepository";

export async function deleteTheme(themeId: string) {
  return ThemeRepository.deleteTheme(themeId);
}
