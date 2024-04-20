import { ThemeRepository } from "../repositories/themeRepository";

export async function searchTheme(query: string) {
  try {
    const themes = await ThemeRepository.searchTheme(query);
    return themes;
  } catch (error) {
    throw new Error("Error searching themes");
  }
}
