import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { showModalActions } from 'store';
import { ModalForm } from 'types';
import { useRouter } from 'next/router';

const useLandingPage = () => {
  const modalForm = useSelector(
    (state: { modal: ModalForm }) => state.modal.modal
  );

  const dispatch = useDispatch();
  const { query, replace, push } = useRouter();
  const { type } = query;

  const { t } = useTranslation('common');

  const closeModalHandler = () => {
    replace('/');
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
  };

  const onSignUpHandler = () => {
    push('?type=register');
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue(''));
  };

  const onLoginHandler = () => {
    push('?type=login');
    dispatch(showModalActions.setModalIsOpen(false));
    dispatch(showModalActions.setModalValue(''));
  };

  const onForgotPasswordHandler = () => {
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('forgotPassword'));
  };

  return {
    t,
    closeModalHandler,
    modalForm,
    type,
    onSignUpHandler,
    onLoginHandler,
    onForgotPasswordHandler,
  };
};

export default useLandingPage;
