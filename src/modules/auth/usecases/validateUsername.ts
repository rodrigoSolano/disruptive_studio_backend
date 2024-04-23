import { UserRepository } from "../../users/repositories/userRepository";

export async function validateUsername(username: string) {
  const user = await UserRepository.findByUsername(username);

  if (user) return { valid: false, message: "Username already exists" };

  return { valid: true, message: "Username is available" };
}
