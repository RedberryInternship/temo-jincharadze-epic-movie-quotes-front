import instance from 'services/axios';

const userNotifications = () => {
  return instance.get('/api/auth/user-notifications');
};

export default userNotifications;
