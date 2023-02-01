import instance from 'services/axios';

const likeToggle = (data: {
  user_id: string;
  quote_id: string;
  movie_id: string;
}) => {
  return instance.post('/api/auth/quote-like', data);
};

export default likeToggle;
