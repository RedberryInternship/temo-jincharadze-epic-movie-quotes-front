import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';

const useMobileSearch = () => {
  const { replace, query } = useRouter();

  const { t } = useTranslation('forms');

  const form = useForm<{ search: string }>({
    mode: 'all',
    defaultValues: { search: '' },
  });

  const { register, handleSubmit, setValue } = form;

  const queryClient = useQueryClient();

  const handleSearch = (data: { search: string }) => {
    replace({ query: data });
    queryClient.invalidateQueries('all quotes');
    setValue('search', '');
  };

  return { t, register, handleSearch, handleSubmit, query, form };
};

export default useMobileSearch;
