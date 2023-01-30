import instance from 'services/axios';

const allQuotes = () => {
  return instance.get('/api/auth/news-feed');
};

export default allQuotes;
