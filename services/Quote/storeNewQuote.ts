import instance from 'services/axios';

const storeNewQuote = (data: FormData) => {
  return instance.post('/api/auth/new-quote', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default storeNewQuote;
