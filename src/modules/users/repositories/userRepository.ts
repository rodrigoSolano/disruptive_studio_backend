import { User } from "../models/userModel";

import { CreateUserDto, UpdateUserDto } from "../dtos/userDto";

export class UserRepository {
  static async createUser(userData: CreateUserDto) {
    const user = new User(userData);
    return user.save();
  }

  static async findUserById(userId: string) {
    return User.findById(userId);
  }

  static async findByEmail(email: string) {
    return User.findOne({ email });
  }

  static async findByUsername(username: string) {
    return User.findOne({ username });
  }

  static async updateUser(userId: string, updateData: UpdateUserDto) {
    return User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  static async deleteUser(userId: string) {
    return User.findByIdAndDelete(userId);
  }

  static async listUsers() {
    return User.find({});
  }
}
