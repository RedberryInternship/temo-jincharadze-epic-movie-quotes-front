export type NewsFeedQuoteTypes = {
  comments: [];
  id: number;
  image: string;
  likes: [] | (string & { find: Function });
  movie: {
    budget: number;
    description: { en: string; ka: string };
    director: { en: string; ka: string };
    id: number;
    image: string;
    name: { en: string; ka: string };
    user: { id: number; name: string; image: string };
    year: number;
  };
  text: { en: string; ka: string };
  movie_id?: string;
};

export type MovieDropDownTypes = {
  id: number;
  name: { ka: string; en: string };
};
