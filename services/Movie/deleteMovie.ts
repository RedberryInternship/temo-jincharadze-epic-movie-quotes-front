import instance from 'services/axios';

const deleteMovie = (id: string) => {
  return instance.post(`/api/auth/movie/${id}?_method=delete`);
};

export default deleteMovie;
