import { useTranslation } from 'next-i18next';

const useFooter = () => {
  const { t } = useTranslation();
  return { t };
};

export default useFooter;
