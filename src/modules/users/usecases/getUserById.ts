import { UserRepository } from "../repositories/userRepository";

export async function getUser(userId: string) {
  return UserRepository.findUserById(userId);
}
