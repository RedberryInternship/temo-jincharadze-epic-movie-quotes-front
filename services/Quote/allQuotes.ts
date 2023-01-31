import { i18n } from 'next-i18next';
import instance from 'services/axios';

const allQuotes = async (
  { pageParam = 1 }: { pageParam: number },
  query: { search?: string }
) => {
  return await instance.get(`/api/auth/news-feed?page=${pageParam}`, {
    params: { ...query, locale: i18n?.language },
  });
};

export default allQuotes;
