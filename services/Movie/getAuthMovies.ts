import instance from 'services/axios';

const getAuthMovies = async () => {
  return await instance.get('/api/auth/auth-movies');
};

export default getAuthMovies;
