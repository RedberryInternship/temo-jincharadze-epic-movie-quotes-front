import instance from 'services/axios';

const updateQuote = (quote: { id: string; updatedQuote: object }) => {
  return instance.post(
    `/api/auth/quote/${quote.id}?_method=put`,
    quote.updatedQuote,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export default updateQuote;
