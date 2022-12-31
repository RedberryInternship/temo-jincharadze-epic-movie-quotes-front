import { useTranslation } from 'next-i18next';

const useForgotPassword = () => {
  const { t } = useTranslation('forms');
  return { t };
};

export default useForgotPassword;
