import instance from 'services/axios';

const getMovieTags = async () => {
  return await instance.get('/api/auth/movie-tags');
};

export default getMovieTags;
