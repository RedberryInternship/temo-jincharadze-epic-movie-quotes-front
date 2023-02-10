import instance from 'services/axios';

const deleteEmail = (data: { email: string }) => {
  return instance.post(`/api/auth/delete-email?_method=delete`, data);
};

export default deleteEmail;
