export type NotificationTypes = {
  id: number;
  sender: { image: string; name: string };
  quote_id: number;
  has_new: number;
  has_comment: number;
  created_at: string;
  quote: { movie_id: number };
};
