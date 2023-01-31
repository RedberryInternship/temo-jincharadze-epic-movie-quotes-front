import { useProfile } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useForm, useWatch } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { storeNewQuote } from 'services';
import { showModalActions } from 'store';

const useWriteQuote = () => {
  const dispatch = useDispatch();

  const { name, image, avatarLoader } = useProfile();

  const { t, i18n } = useTranslation('forms');

  const { push } = useRouter();

  const form = useForm<{
    quoteEn: string;
    quoteKa: string;
    image: string | File;
    movie: string;
  }>({
    mode: 'all',
    defaultValues: {
      quoteEn: '',
      quoteKa: '',
      image: '',
      movie: '',
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
      value: /^[a-zA-Z0-9 ]*$/,
      message: t('quotesEn'),
    },
  };

  const quoteKaOptions = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[ა-ჰ0-9 ]*$/,
      message: t('quotesKa'),
    },
  };

  const closeModal = () => {
    push('/news-feed');
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation(storeNewQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('all quotes');
      dispatch(showModalActions.setModalIsOpen(false));
      dispatch(showModalActions.setModalValue(''));
      push(`/news-feed`);
    },
  });

  useWatch({
    control: control,
    name: ['quoteEn', 'quoteKa', 'image', 'movie'],
  });

  const handleQuoteSubmit = (data: {
    quoteEn: string;
    quoteKa: string;
    image: string | File;
    movie: string;
  }) => {
    if (getValues('image') === '') {
      setError('image', { type: 'custom', message: t('errors.required')! });
      return;
    }

    const newData = new FormData();
    newData.append('quoteEn', data.quoteEn.trim());
    newData.append('quoteKa', data.quoteKa.trim());
    newData.append('image', getValues('image'));
    newData.append('movie_id', data.movie[0]);

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
    handleSubmit,
    closeModal,
    i18n,
    t,
    handleQuoteSubmit,
  };
};

export default useWriteQuote;
