export type User = {
  user: {
    id: string;
    name: string;
    image: string;
    google_id: string;
    email_verified_at: string | null;
    emails: [];
  };
};
