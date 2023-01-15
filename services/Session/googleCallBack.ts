import instance from 'services/axios';

const googleCallBack = async (query: string, locale: string, type: string) => {
  await instance.get('/sanctum/csrf-cookie');
  return instance.get(`/api/auth/google/${locale}/${type}/callback${query}`);
};

export default googleCallBack;
