import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

const useProfileInput = () => {
  const { register } = useFormContext();
  const { t } = useTranslation('forms');
  const { query } = useRouter();
  return { register, query, t };
};

export default useProfileInput;
