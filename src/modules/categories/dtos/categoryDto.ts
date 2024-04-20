export interface CreateCategoryDto {
  name: string;
  coverImage: string;
}

export interface UpdateCategoryDto {
  name?: string;
  coverImage?: string;
}
