export type AddQuoteTypes = {
  quoteEn: string;
  quoteKa: string;
  image: File | string;
};

export type AddNewQuoteTypes = {
  data: {
    id: string;
    image: string;
    name: { ka: string; en: string };
    year: number;
    director: { ka: string; en: string };
    tag: [];
    quotes: { filter: Function };
    text: { en: string; ka: string };
  };
};

export type EditQuoteTypes = {
  data: {
    text: { en: string; ka: string };
    image: string;
  };
};

export type ViewQuote = {
  id: number;
  text: { en: string; ka: string };
  image: string;
  comments: [];
  likes: [] | (string & { map: Function });
};

export type QuoteCommentType = {
  id: number;
  user: {
    image: string;
    name: string;
  };
  comment: string;
};
