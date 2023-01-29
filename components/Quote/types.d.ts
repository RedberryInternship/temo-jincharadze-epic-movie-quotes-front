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
  };
};

export type EditQuoteTypes = {
  data: {
    text: { en: string; ka: string };
    image: string;
  };
};
