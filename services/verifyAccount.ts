import instance from './axios';

const verifyEmail = (url: string) => {
  return instance.get(url);
};

export default verifyEmail;
