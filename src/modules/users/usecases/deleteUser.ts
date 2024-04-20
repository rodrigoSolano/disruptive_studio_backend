import { UserRepository } from "../repositories/userRepository";

export async function deleteUser(userId: string) {
  return UserRepository.deleteUser(userId);
}
