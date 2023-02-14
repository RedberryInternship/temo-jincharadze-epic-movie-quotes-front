import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from 'react-query';
import { getUserMovies } from 'services';

const useMovie = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { i18n, t } = useTranslation('forms');
  const { replace, query } = useRouter();

  const form = useForm<{ search: string }>({
    mode: 'all',
    defaultValues: {
      search: '',
    },
  });

  const { setValue } = form;

  const { data } = useQuery({
    queryKey: ['user movies', query],
    queryFn: () => getUserMovies(query),
    retry: 0,
    refetchOnWindowFocus: false,
  });
  const { register, handleSubmit } = form;

  const queryClient = useQueryClient();

  const handleSearch = (data: { search: string }) => {
    replace({ query: data });
    queryClient.invalidateQueries({ queryKey: 'user movies' });
    setValue('search', '');
  };

  return {
    isFocused,
    setIsFocused,
    query,
    data,
    i18n,
    form,
    register,
    handleSubmit,
    t,
    handleSearch,
  };
};

export default useMovie;
