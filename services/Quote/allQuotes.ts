import instance from 'services/axios';

const allQuotes = async ({ pageParam = 1 }: { pageParam: number }) => {
  return await instance.get(`/api/auth/news-feed?page=${pageParam}`);
};

export default allQuotes;
