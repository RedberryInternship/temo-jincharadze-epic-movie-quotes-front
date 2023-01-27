export type AddMovieTypes = {
  user_id?: number;
  nameEn: string;
  nameKa: string;
  directorEn: string;
  directorKa: string;
  descriptionEn: string;
  descriptionKa: string;
  budget: string;
  year: string;
  image: File | string;
  tags: [];
};
