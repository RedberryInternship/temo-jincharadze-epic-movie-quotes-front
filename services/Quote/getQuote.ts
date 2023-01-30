import instance from 'services/axios';

const getQuote = async (quote_id: number) => {
  return await instance.get(`/api/auth/get-quote`, {
    params: { id: quote_id },
  });
};

export default getQuote;
