import { useLike, useProfile, useQuoteDelete } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { commentUpload } from 'services';
import { showModalActions } from 'store';

const useViewQuote = (quoteInfo: any) => {
  const { mutate: likeInstance } = useLike();
  const { mutate: quoteDelete } = useQuoteDelete();
  const form = useForm<{ comment: string }>({
    mode: 'all',
    defaultValues: { comment: '' },
  });

  const { register, getValues, handleSubmit, setValue } = form;

  const dispatch = useDispatch();

  const { name, image, avatarLoader, id } = useProfile();

  const { query } = useRouter();

  const { i18n, t } = useTranslation('forms');

  const filteredQuote = quoteInfo?.data.quotes.filter(
    (quote: { id: number }) => quote.id === +query.id!
  );

  const queryClient = useQueryClient();

  const { mutate: commentInstance } = useMutation(commentUpload, {
    onSuccess: () => {
      queryClient.invalidateQueries('selected movie');
    },
  });

  const handleQuoteDelete = () => {
    quoteDelete(query.id?.toString()!);
  };

  const closeModal = () => {
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
  };

  const commentHandler = () => {
    const newData = {
      user_id: id.toString()!,
      quote_id: query.id?.toString()!,
      comment: getValues('comment'),
    };

    if (getValues('comment')) {
      commentInstance(newData);
      setValue('comment', '');
    }
  };

  const likeToggleHandler = () => {
    likeInstance({ user_id: id.toString()!, quote_id: query.id?.toString()! });
  };

  return {
    name,
    image,
    avatarLoader,
    closeModal,
    i18n,
    query,
    register,
    filteredQuote,
    form,
    handleSubmit,
    commentHandler,
    likeToggleHandler,
    id,
    handleQuoteDelete,
    t,
  };
};

export default useViewQuote;
