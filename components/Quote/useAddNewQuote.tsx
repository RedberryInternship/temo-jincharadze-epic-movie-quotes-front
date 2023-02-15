import { useProfile } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useForm, useWatch } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { storeQuote } from 'services';
import { showModalActions } from 'store';
import { AddQuoteTypes } from './types';

const useAddNewQuote = (quoteInfo: { data: { id: string } }) => {
  const dispatch = useDispatch();

  const { name, image, avatarLoader } = useProfile();

  const { t, i18n } = useTranslation('forms');

  const { push, query } = useRouter();

  const form = useForm<AddQuoteTypes>({
    mode: 'all',
    defaultValues: {
      quoteEn: '',
      quoteKa: '',
      image: '',
    },
  });

  const {
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
    control,
  } = form;

  const quoteEnOptions = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[a-zA-Z0-9",.?!() ]*$/,
      message: t('quotesEn'),
    },
  };

  const quoteKaOptions = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[ა-ჰ0-9",.?!() ]*$/,
      message: t('quotesKa'),
    },
  };

  const closeModal = () => {
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation(storeQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('selected movie');
      dispatch(showModalActions.setModalIsOpen(false));
      dispatch(showModalActions.setModalValue(''));
      push(`/movie-list/${query.movieId}`);
    },
    onError: (error: any) => {
      error?.response.status === 413 &&
        setError('image', { message: t('errors.tooLarge')! });
    },
  });

  useWatch({
    control: control,
    name: ['quoteEn', 'quoteKa', 'image'],
  });

  const handleQuoteSubmit = (data: AddQuoteTypes) => {
    if (getValues('image') === '') {
      setError('image', { type: 'custom', message: t('errors.required')! });
      return;
    }

    const newData = new FormData();
    newData.append('quoteEn', data.quoteEn.trim());
    newData.append('quoteKa', data.quoteKa.trim());
    newData.append('image', getValues('image'));
    newData.append('movie_id', quoteInfo.data.id);

    mutate(newData);
  };

  return {
    quoteEnOptions,
    quoteKaOptions,
    errors,
    form,
    name,
    image,
    avatarLoader,
    handleQuoteSubmit,
    handleSubmit,
    closeModal,
    i18n,
    t,
  };
};

export default useAddNewQuote;
