import instance from 'services/axios';

const deleteQuote = (id: string) => {
  return instance.post(`/api/auth/quote/${id}?_method=delete`);
};

export default deleteQuote;
