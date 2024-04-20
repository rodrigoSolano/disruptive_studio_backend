import { Request, Response } from "express";
import * as ThemeService from "../usecases/listThemes";
import * as CreateThemeService from "../usecases/createTheme";
import * as UpdateThemeService from "../usecases/updateTheme";
import * as DeleteThemeService from "../usecases/deleteTheme";
import * as SearchThemeService from "../usecases/searchTheme";

export async function createTheme(req: Request, res: Response) {
  try {
    const theme = await CreateThemeService.createTheme(req.body);
    res.status(201).json(theme);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating theme", error: error.message });
  }
}

export async function listThemes(req: Request, res: Response) {
  try {
    const themes = await ThemeService.listThemes();
    res.json(themes);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error listing themes", error: error.message });
  }
}

export async function updateTheme(req: Request, res: Response) {
  try {
    const updatedTheme = await UpdateThemeService.updateTheme(
      req.params.id,
      req.body
    );
    res.json(updatedTheme);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating theme", error: error.message });
  }
}

export async function deleteTheme(req: Request, res: Response) {
  try {
    await DeleteThemeService.deleteTheme(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error deleting theme", error: error.message });
  }
}

export async function searchThemes(req: Request, res: Response) {
  try {
    const { query } = req.query;

    if (typeof query !== "string") {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    const themes = await SearchThemeService.searchTheme(query);
    res.json(themes);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error searching themes", error: error.message });
  }
}
