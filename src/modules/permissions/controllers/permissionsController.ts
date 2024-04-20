import { Request, Response } from "express";
import { User } from "../../users/models/userModel";

// Listar permisos disponibles (simplificado para ejemplo)
export async function listPermissions(req: Request, res: Response) {
  res.json(["admin", "reader", "creator"]);
}

// Actualizar permisos de un usuario
export async function updatePermissions(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating permissions", error: error.message });
  }
}
