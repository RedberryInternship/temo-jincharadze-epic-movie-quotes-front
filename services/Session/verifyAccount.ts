import instance from '../axios';

const verifySecondaryEmail = (url: string) => {
  return instance.get(url);
};

export default verifySecondaryEmail;
