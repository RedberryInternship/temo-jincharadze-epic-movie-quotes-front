import instance from 'services/axios';

const storeEmail = (data: { email: string; locale: string }) => {
  return instance.post('/api/auth/add-email', data);
};

export default storeEmail;
