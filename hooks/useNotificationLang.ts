import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { showModalActions } from 'store';

const useNotificationLang = () => {
  const { t } = useTranslation('notification');
  const { push } = useRouter();

  const dispatch = useDispatch();

  const showLoginHandler = () => {
    dispatch(showModalActions.setModalIsOpen(true));
    push('?type=login');
    dispatch(showModalActions.setModalValue(''));
  };

  const closeModal = () => {
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
  };

  return { t, showLoginHandler, closeModal };
};

export default useNotificationLang;
