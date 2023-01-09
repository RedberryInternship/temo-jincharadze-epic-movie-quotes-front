import instance from 'services/axios';

const checkPasswordResetEmail = (data: { email: string }) => {
  return instance.post('/api/reset-password', data);
};

export default checkPasswordResetEmail;
