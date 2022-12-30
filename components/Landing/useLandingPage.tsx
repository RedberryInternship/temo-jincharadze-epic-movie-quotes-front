import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const useLandingPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalForm, setModalForm] = useState<string>('');
  const { t } = useTranslation('common');

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const onSignUpHandler = () => {
    setShowModal(true);
    setModalForm('signUp');
  };

  const onLoginHandler = () => {
    setShowModal(true);
    setModalForm('login');
  };

  return {
    t,
    closeModalHandler,
    showModal,
    setModalForm,
    modalForm,
    onSignUpHandler,
    onLoginHandler,
  };
};

export default useLandingPage;
