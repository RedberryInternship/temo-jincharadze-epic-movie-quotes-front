import { useTranslation } from 'next-i18next';

const useLandingPage = () => {
  const { t } = useTranslation('common');
  return { t };
};

export default useLandingPage;
