import instance from '../axios';

const getCsrfToken = async () => {
  const response = await instance.get('/sanctum/csrf-cookie');
  return response;
};

export default getCsrfToken;
