export interface CreateContentDto {
  title: string;
  description: string;
  type: string; // 'image', 'video', 'text'
  url?: string; // Optional, required based on type
  theme_id: string;
  createdBy: string;
  credits?: string;
}

export interface UpdateContentDto {
  title?: string;
  description?: string;
  url?: string;
  credits?: string;
}
