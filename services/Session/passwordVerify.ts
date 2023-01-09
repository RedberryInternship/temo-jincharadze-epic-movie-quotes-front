import instance from 'services/axios';

const passwordVerify = async (url: string) => {
  return instance.get(url);
};

export default passwordVerify;
