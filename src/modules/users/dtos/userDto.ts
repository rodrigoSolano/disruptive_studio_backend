export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface UpdateUserDto {
  email?: string;
  role?: string;
}
