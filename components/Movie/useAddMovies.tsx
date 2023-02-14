import { useProfile } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useForm, useWatch } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { storeMovie } from 'services';
import { User } from 'types';
import { AddMovieTypes } from './types';

const useAddMovies = () => {
  const user = useSelector((state: { user: User }) => state.user);
  const { name, image, avatarLoader } = useProfile();
  const { t } = useTranslation('forms');
  const { push } = useRouter();
  const form = useForm<AddMovieTypes>({
    mode: 'all',
    defaultValues: {
      nameEn: '',
      nameKa: '',
      directorEn: '',
      directorKa: '',
      descriptionEn: '',
      descriptionKa: '',
      budget: '',
      year: '',
      image: '',
      tags: [],
    },
  });

  const {
    formState: { errors },
    control,
    handleSubmit,
    getValues,
    setError,
  } = form;

  useWatch({
    control: control,
    name: ['tags'],
  });

  const movieNameEn = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[a-zA-Z0-9 ]*$/,
      message: t('moviesEn'),
    },
  };
  const movieNameKa = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[ა-ჰ0-9 ]*$/,
      message: t('moviesKa'),
    },
  };

  const directorEn = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[a-zA-Z ]*$/,
      message: t('moviesEn'),
    },
  };
  const directorKa = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[ა-ჰ ]*$/,
      message: t('moviesKa'),
    },
  };

  const movieTextEn = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[a-zA-Z0-9",.?!() ]*$/,
      message: t('moviesEn'),
    },
  };
  const movieTextKa = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[ა-ჰ0-9",.?!() ]*$/,
      message: t('moviesKa'),
    },
  };

  const budgetOption = {
    required: { value: true, message: t('errors.required') },
    pattern: { value: /^[0-9]*$/, message: t('errors.budget') },
  };

  const yearOption = {
    required: { value: true, message: t('errors.required') },
    pattern: { value: /^[0-9]{4,4}\s*$/, message: t('errors.number') },
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation(storeMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries('user movies');
      push('/movie-list');
    },
    onError: (error: any) => {
      error?.response.status === 413 &&
        setError('image', { message: t('errors.tooLarge')! });
    },
  });

  const handleSubmitData = async (data: AddMovieTypes) => {
    if (getValues('image') === '') {
      setError('image', { type: 'custom', message: t('errors.required')! });
      return;
    }

    const newData = new FormData();
    newData.append('nameEn', data.nameEn);
    newData.append('nameKa', data.nameKa);
    newData.append('directorEn', data.directorEn);
    newData.append('directorKa', data.directorKa);
    newData.append('descriptionEn', data.descriptionEn);
    newData.append('descriptionKa', data.descriptionKa);
    newData.append('budget', data.budget.trim());
    newData.append('year', data.year);
    newData.append('image', getValues('image'));
    newData.append('tags', JSON.stringify(data.tags));
    newData.append('user_id', user.user.id);

    mutate(newData);
  };

  return {
    errors,
    form,
    name,
    image,
    avatarLoader,
    budgetOption,
    yearOption,
    handleSubmitData,
    handleSubmit,
    t,
    movieNameEn,
    movieNameKa,
    directorEn,
    directorKa,
    movieTextEn,
    movieTextKa,
  };
};

export default useAddMovies;
