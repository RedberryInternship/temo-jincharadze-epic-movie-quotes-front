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

export type UpdateMovieTypes = {
  data: {
    name: { en: string; ka: string };
    director: { en: string; ka: string };
    description: { en: string; ka: string };
    budget: string;
    year: string;
    image: File | string;
    tag: { map: Function };
  };
};
