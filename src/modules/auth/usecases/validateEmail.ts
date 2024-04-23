import { UserRepository } from "../../users/repositories/userRepository";

export async function validateEmail(email: string) {
  const user = await UserRepository.findByEmail(email);

  if (user) return { valid: false, message: "Email already exists" };

  return { valid: true, message: "Email is available" };
}
