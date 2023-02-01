import { useLike, useProfile, useQuoteDelete } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { showModalActions } from 'store';
import { AddNewQuoteTypes } from './types';

const useViewQuote = (quoteInfo: AddNewQuoteTypes) => {
  const { mutate: likeInstance } = useLike();
  const { mutate: quoteDelete } = useQuoteDelete();

  const dispatch = useDispatch();

  const { name, image, avatarLoader, id } = useProfile();

  const { query } = useRouter();

  const { i18n, t } = useTranslation('forms');

  const filteredQuote = quoteInfo?.data.quotes.filter(
    (quote: { id: number }) => quote.id === +query.id!
  );

  const handleQuoteDelete = () => {
    quoteDelete(query.id?.toString()!);
  };

  const closeModal = () => {
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
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
    filteredQuote,
    likeToggleHandler,
    id,
    handleQuoteDelete,
    t,
  };
};

export default useViewQuote;
