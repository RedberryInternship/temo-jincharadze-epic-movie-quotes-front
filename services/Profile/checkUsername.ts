import instance from 'services/axios';

const checkUsername = async (data: { username: string; userId: number }) => {
  return await instance.get('/api/auth/check-username', {
    params: data,
  });
};

export default checkUsername;
