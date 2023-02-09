import instance from 'services/axios';

const updateUsername = (data: { username: string }) => {
  return instance.post(`/api/auth/update-username/?_method=put`, data);
};

export default updateUsername;
