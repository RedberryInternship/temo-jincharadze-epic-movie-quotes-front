import instance from 'services/axios';

const getUserInfo = async () => {
  return await instance.get('/api/auth/user');
};

export default getUserInfo;
