import { Request, Response } from "express";
import { Content } from "../../content/models/contentModel";

export async function getContentStats(req: Request, res: Response) {
  try {
    const stats = await Content.aggregate([
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(stats);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error getting content stats", error: error.message });
  }
}
