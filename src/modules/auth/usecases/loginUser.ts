import { User } from "../../users/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface LoginDto {
  email: string;
  password: string;
}

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

export async function loginUser({ email, password }: LoginDto) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
  return { user, token };
}
