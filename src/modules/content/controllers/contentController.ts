import { Request, Response } from "express";
import * as ContentService from "../usecases/listContent";
import * as CreateContentService from "../usecases/createContent";
import * as UpdateContentService from "../usecases/updateContent";
import * as DeleteContentService from "../usecases/deleteContent";

export async function createContent(req: Request, res: Response) {
  try {
    const content = await CreateContentService.createContent(req.body);
    res.status(201).json(content);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating content", error: error.message });
  }
}

export async function listContent(req: Request, res: Response) {
  try {
    const contents = await ContentService.listContent();
    res.json(contents);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error listing content", error: error.message });
  }
}

export async function updateContent(req: Request, res: Response) {
  try {
    const updatedContent = await UpdateContentService.updateContent(
      req.params.id,
      req.body
    );
    res.json(updatedContent);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating content", error: error.message });
  }
}

export async function deleteContent(req: Request, res: Response) {
  try {
    await DeleteContentService.deleteContent(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error deleting content", error: error.message });
  }
}
