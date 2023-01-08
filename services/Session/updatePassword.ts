import instance from 'services/axios';

const updatePassword = (data: {
  password: string;
  confirm_password: string;
}) => {
  return instance.post('/api/update-password', data);
};

export default updatePassword;
