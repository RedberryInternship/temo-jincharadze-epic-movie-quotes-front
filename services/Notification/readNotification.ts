import instance from 'services/axios';

const readNotification = async (data: {
  quote_id?: number;
  markAllAsRead?: boolean;
}) => {
  return await instance.post('/api/auth/read-notification?_method=put', data);
};

export default readNotification;
