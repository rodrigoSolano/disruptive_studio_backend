import { UserRepository } from "../repositories/userRepository";
import { CreateUserDto } from "../dtos/userDto";

export async function createUser(userData: CreateUserDto) {
  return UserRepository.createUser(userData);
}
