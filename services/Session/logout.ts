import instance from 'services/axios';

const logout = async () => {
  const response = await instance.post('/api/auth/logout-user');
  return response;
};

export default logout;
