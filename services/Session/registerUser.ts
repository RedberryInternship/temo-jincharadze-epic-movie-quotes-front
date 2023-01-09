import instance from '../axios';
import { registerUserForm } from './types';

const registerUser = (data: registerUserForm) => {
  return instance.post('/api/register', data);
};

export default registerUser;
