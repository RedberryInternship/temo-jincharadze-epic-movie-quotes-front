import instance from 'services/axios';

const changePrimaryEmail = (data: { email: string }) => {
  return instance.post('/api/auth/change-primary-email?_method=put', data);
};

export default changePrimaryEmail;
