import instance from '../axios';

const loginUser = (data: {
  login: string;
  password: string;
  remember: string;
}) => {
  return instance.post('/api/login', data);
};

export default loginUser;
