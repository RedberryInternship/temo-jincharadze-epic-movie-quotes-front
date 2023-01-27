import instance from 'services/axios';

const updateMovie = (movie: { id: string; updatedMovie: object }) => {
  return instance.post(
    `/api/auth/movie/${movie.id}?_method=put`,
    movie.updatedMovie,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export default updateMovie;
