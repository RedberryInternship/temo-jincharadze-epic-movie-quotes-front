import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useQuery } from 'react-query';
import { getAuthMovies } from 'services';

const useMovieDropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<string>('');

  const { i18n, t } = useTranslation('forms');
  const form = useFormContext();
  const { getValues, register, setValue, trigger } = form;

  const { data } = useQuery({
    queryKey: ['auth movies'],
    queryFn: getAuthMovies,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  const handleOpen = () => {
    !isOpen && setIsOpen(true);
  };

  const handleClose = () => {
    trigger('movie');
    setIsOpen(false);
  };

  const requiredOption = {
    required: { value: true, message: t('errors.required') },
  };

  return {
    i18n,
    setValue,
    getValues,
    register,
    requiredOption,
    t,
    handleOpen,
    isOpen,
    handleClose,
    data,
    setIsOpen,
    setSelectedMovie,
    selectedMovie,
  };
};

export default useMovieDropDown;
