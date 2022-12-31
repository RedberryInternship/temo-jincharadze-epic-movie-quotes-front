import { useTranslation } from 'next-i18next';

const useLogin = () => {
  const { t } = useTranslation('forms');
  return { t };
};

export default useLogin;
