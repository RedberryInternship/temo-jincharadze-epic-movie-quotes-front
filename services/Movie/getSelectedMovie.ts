import instance from 'services/axios';

const getSelectedMovie = async (id: string) => {
  return await instance.get(`/api/auth/movie/${id}`);
};

export default getSelectedMovie;
