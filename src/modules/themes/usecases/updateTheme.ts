import { UpdateThemeDto } from "../dtos/themeDto";
import { ThemeRepository } from "../repositories/themeRepository";

export async function updateTheme(themeId: string, theme: UpdateThemeDto) {
  return ThemeRepository.updateTheme(themeId, theme);
}
