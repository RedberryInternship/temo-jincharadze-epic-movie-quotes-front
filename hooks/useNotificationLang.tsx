import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { showModalActions } from 'store';

const useNotificationLang = () => {
  const { t } = useTranslation('notification');

  const dispatch = useDispatch();

  const showLoginHandler = () => {
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('login'));
  };

  const closeModal = () => {
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
  };

  return { t, showLoginHandler, closeModal };
};

export default useNotificationLang;
