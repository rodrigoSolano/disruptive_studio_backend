export interface CreateThemeDto {
  name: string;
  category_id: string;
  permissions: {
    images: boolean;
    videos: boolean;
    texts: boolean;
  };
}

export interface UpdateThemeDto {
  name?: string;
  category_id?: string;
  permissions?: {
    images?: boolean;
    videos?: boolean;
    texts?: boolean;
  };
}
