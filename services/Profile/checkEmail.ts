import instance from 'services/axios';

const checkEmail = async (data: { email: string }) => {
  return await instance.get('/api/auth/check-email', {
    params: data,
  });
};

export default checkEmail;
