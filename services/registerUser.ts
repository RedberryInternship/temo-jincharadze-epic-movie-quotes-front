import instance from './axios';

type registerUserForm = {
  name: string;
  password: string;
  confirm_password: string;
  email: string;
};

const registereUser = (data: registerUserForm) => {
  return instance.post('/register', data);
};

export default registereUser;
