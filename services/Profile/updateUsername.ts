import instance from 'services/axios';

const updateUsername = (data: { username: string }) => {
  return instance.put(`/api/auth/update-username`, data);
};

export default updateUsername;
