import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getSelectedMovie } from 'services';
import { showModalActions } from 'store';
import { ModalForm, User } from 'types';
import useGetSelectedQuote from './useGetSelectedQuote';
import useGetUserData from './useGetUserData';
import useLike from './useLike';
import useQuoteDelete from './useQuoteDelete';

const useSelectedMovie = () => {
  useGetUserData();
  const { query, push } = useRouter();

  const { mutate: likeInstance } = useLike();
  const [quoteMenu, setQuoteMenu] = useState<boolean>(false);
  const [selectedQuote, setSelectedQuote] = useState<string>('');

  const { data: getQuote } = useGetSelectedQuote(Number(query.id));

  const { mutate: quoteDelete } = useQuoteDelete();

  const { i18n, t } = useTranslation('forms');
  const dispatch = useDispatch();

  const userInfo = useSelector((state: { user: User }) => state.user);
  const { id: userId } = userInfo.user;

  const modalForm = useSelector(
    (state: { modal: ModalForm }) => state.modal.modal
  );

  const openModal = () => {
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('update movie'));
  };

  const openQuoteAddModal = () => {
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('add quote'));
  };

  const closeModal = () => {
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
  };

  const id = query.movieId;

  const { data } = useQuery<object>({
    queryKey: ['selected movie'],
    queryFn: () => getSelectedMovie(id!.toString()),
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });

  const queryClient = useQueryClient();

  const { mutate: movieDelete } = useMutation(deleteMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries('user movies');
      push('/movie-list');
    },
  });

  const handleQuoteDelete = () => {
    quoteDelete(selectedQuote);
  };

  const handleMovieDelete = () => {
    movieDelete(query.movieId?.toString()!);
  };

  const selectedQuoteHandler = (id: string) => {
    setQuoteMenu(true);
    setSelectedQuote(id);
  };

  const refEl = useRef<HTMLDivElement>(null);

  const likeToggleHandler = (quoteId: any) => {
    likeInstance({
      user_id: userId.toString()!,
      quote_id: quoteId,
    });
  };

  useEffect(() => {
    const toggleBlurHandler = (event: MouseEvent) => {
      if (refEl.current && !refEl.current.contains(event.target as Node)) {
        setQuoteMenu(false);
        setSelectedQuote('');
      }
    };

    document.addEventListener('click', toggleBlurHandler, true);
    return () => document.removeEventListener('click', toggleBlurHandler, true);
  }, []);

  return {
    data,
    i18n,
    query,
    openModal,
    modalForm,
    closeModal,
    handleMovieDelete,
    openQuoteAddModal,
    quoteMenu,
    setQuoteMenu,
    selectedQuote,
    selectedQuoteHandler,
    refEl,
    handleQuoteDelete,
    userId,
    likeToggleHandler,
    getQuote,
    t,
  };
};

export default useSelectedMovie;
