import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const useProfileInputMobile = () => {
  const { t } = useTranslation('forms');
  const { query } = useRouter();

  return { t, query };
};

export default useProfileInputMobile;
