import { useProfile } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useForm, useWatch } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie } from 'services';
import { showModalActions } from 'store';
import { User } from 'types';
import { AddMovieTypes, UpdateMovieTypes } from './types';

const useUpdateMovie = (movieInfo: UpdateMovieTypes) => {
  const user = useSelector((state: { user: User }) => state.user);

  const dispatch = useDispatch();
  const { name, image, avatarLoader } = useProfile();
  const { t } = useTranslation('forms');
  const { query } = useRouter();

  const closeModal = () => {
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
  };

  const form = useForm<AddMovieTypes>({
    mode: 'all',
    defaultValues: {
      nameEn: movieInfo?.data.name.en,
      nameKa: movieInfo?.data.name.ka,
      directorEn: movieInfo?.data.director.en,
      directorKa: movieInfo?.data.director.ka,
      descriptionEn: movieInfo?.data.description.en,
      descriptionKa: movieInfo?.data.description.ka,
      budget: movieInfo?.data.budget,
      year: movieInfo?.data.year,
      image: movieInfo?.data.image,
      tags: movieInfo?.data.tag.map((item: { id: number }) =>
        item.id.toString()
      ),
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

  const requiredOptions = {
    required: { value: true, message: t('errors.required') },
  };

  const budgetOption = {
    required: { value: true, message: t('errors.required') },
    pattern: { value: /^[0-9]*$/, message: t('errors.number') },
  };

  const yearOption = {
    required: { value: true, message: t('errors.required') },
    pattern: { value: /^[0-9]{4,4}\s*$/, message: t('errors.number') },
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation(updateMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries('selected movie');
      dispatch(showModalActions.setModalIsOpen(false));
      dispatch(showModalActions.setModalValue(''));
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
    newData.append('budget', data.budget);
    newData.append('year', data.year);
    newData.append('image', getValues('image'));
    newData.append('tags', JSON.stringify(data.tags));
    newData.append('user_id', user.user.id);

    mutate({ id: query.movieId?.toString()!, updatedMovie: newData });
  };

  return {
    requiredOptions,
    errors,
    form,
    name,
    image,
    avatarLoader,
    budgetOption,
    yearOption,
    handleSubmitData,
    handleSubmit,
    query,
    t,
    closeModal,
  };
};

export default useUpdateMovie;
