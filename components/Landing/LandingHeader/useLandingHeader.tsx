import { useTranslation } from 'next-i18next';

const useLandingHeader = () => {
  const { t } = useTranslation('common');

  return { t };
};

export default useLandingHeader;
