import { UserRepository } from '../../users/repositories/userRepository';
import { CreateUserDto } from '../../users/dtos/userDto';

export async function registerUser(userData: CreateUserDto) {
  return UserRepository.createUser(userData);
}
