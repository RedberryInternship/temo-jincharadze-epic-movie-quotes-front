import instance from 'services/axios';

const getGoogleUrl = async (locale: string, type: string) => {
  await instance.get('/sanctum/csrf-cookie');
  return instance.get(`/api/google-register/${locale}/${type}`);
};

export default getGoogleUrl;
