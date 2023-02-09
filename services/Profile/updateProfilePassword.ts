import instance from 'services/axios';

const updateProfilePassword = (data: {
  password: string;
  confirm_password: string;
}) => {
  return instance.post(`/api/auth/change-password`, data);
};

export default updateProfilePassword;
