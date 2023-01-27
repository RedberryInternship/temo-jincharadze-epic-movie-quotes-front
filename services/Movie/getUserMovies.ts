import { i18n } from 'next-i18next';
import instance from 'services/axios';

const getUserMovies = async (query: { search?: string }) => {
  return await instance.get('/api/auth/user-movies', {
    params: { ...query, locale: i18n?.language },
  });
};

export default getUserMovies;
