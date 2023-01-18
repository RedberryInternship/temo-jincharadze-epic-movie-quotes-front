export type User = {
  user: {
    id: string;
    name: string;
    image: string;
  };
  emails: [
    {
      email: string;
      primary: string;
      id: string;
      user_id: string;
    }
  ];
};
