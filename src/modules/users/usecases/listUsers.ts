import { UserRepository } from "../repositories/userRepository";

export async function listUsers() {
  return UserRepository.listUsers();
}
