import { UpdateUserDto } from "../dtos/userDto";
import { UserRepository } from "../repositories/userRepository";

export async function updateUser(userId: string, userData: UpdateUserDto) {
  return UserRepository.updateUser(userId, userData);
}
