import { useProfile, useQuoteDelete } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import updateQuote from 'services/Quote/updateQuote';
import { showModalActions } from 'store';
import { AddQuoteTypes, EditQuoteTypes } from './types';

const useEditQuote = (singleQuote: EditQuoteTypes) => {
  const { query, push } = useRouter();

  const { name, image, avatarLoader } = useProfile();
  const { mutate: quoteDeleteInstance } = useQuoteDelete();

  const dispatch = useDispatch();

  const { t } = useTranslation('forms');

  const form = useForm<AddQuoteTypes>({
    mode: 'all',
    defaultValues: {
      quoteEn: singleQuote?.data.text.en,
      quoteKa: singleQuote?.data.text.ka,
      image: singleQuote?.data.image,
    },
  });

  const {
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = form;

  const quoteEnOptions = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[a-zA-Z0-9,.?!() ]*$/,
      message: t('quotesEn'),
    },
  };

  const quoteKaOptions = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[ა-ჰ0-9,.?!() ]*$/,
      message: t('quotesKa'),
    },
  };

  const closeModal = () => {
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
    push(`/movie-list/${query.movieId}`);
  };

  const handleQuoteDelete = () => {
    quoteDeleteInstance(query.id?.toString()!);
  };

  const queryClient = useQueryClient();

  const { mutate: quoteUpdateInstance } = useMutation(updateQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('selected movie');
      queryClient.invalidateQueries('selected quote');
      dispatch(showModalActions.setModalIsOpen(false));
      dispatch(showModalActions.setModalValue(''));
      push(`/movie-list/${query.movieId}`);
    },
  });

  const handleQuoteUpadate = (data: AddQuoteTypes) => {
    if (getValues('image') === '') {
      setError('image', { type: 'custom', message: t('errors.required')! });
      return;
    }

    const newData = new FormData();
    newData.append('quoteEn', data.quoteEn.trim());
    newData.append('quoteKa', data.quoteKa.trim());
    newData.append('image', getValues('image'));

    quoteUpdateInstance({ id: query.id?.toString()!, updatedQuote: newData });
  };

  return {
    handleSubmit,
    quoteKaOptions,
    quoteEnOptions,
    closeModal,
    errors,
    name,
    image,
    avatarLoader,
    handleQuoteDelete,
    form,
    handleQuoteUpadate,
    t,
  };
};

export default useEditQuote;
