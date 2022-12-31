import { useTranslation } from 'next-i18next';

const useSignUp = () => {
  const { t } = useTranslation('forms');

  return { t };
};

export default useSignUp;
