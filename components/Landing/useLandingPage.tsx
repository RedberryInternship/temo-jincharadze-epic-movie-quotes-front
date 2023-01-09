import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { showModalActions } from 'store';
import { useSelector } from 'react-redux';
import { ModalForm } from 'types';

const useLandingPage = () => {
  const modalForm = useSelector(
    (state: { modal: ModalForm }) => state.modal.modal
  );

  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const closeModalHandler = () => {
    dispatch(showModalActions.setModalIsOpen(false));
  };

  const onSignUpHandler = () => {
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('signUp'));
  };

  const onLoginHandler = () => {
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('login'));
  };

  const onForgotPasswordHandler = () => {
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('forgotPassword'));
  };

  return {
    t,
    closeModalHandler,
    modalForm,
    onSignUpHandler,
    onLoginHandler,
    onForgotPasswordHandler,
  };
};

export default useLandingPage;
