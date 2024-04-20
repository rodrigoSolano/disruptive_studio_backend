import { CreateThemeDto } from "../dtos/themeDto";
import { ThemeRepository } from "../repositories/themeRepository";

export async function createTheme(data: CreateThemeDto) {
  return ThemeRepository.createTheme(data);
}
