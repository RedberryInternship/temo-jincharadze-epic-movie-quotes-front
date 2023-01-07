import instance from '../axios';

type registerUserForm = {
  name: string;
  password: string;
  confirm_password: string;
  email: string;
};

const registerUser = (data: registerUserForm) => {
  return instance.post('/api/register', data);
};

export default registerUser;
