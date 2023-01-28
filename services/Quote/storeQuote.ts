import instance from 'services/axios';

const storeQuote = (data: FormData) => {
  return instance.post('/api/auth/quote-upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default storeQuote;
