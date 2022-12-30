import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const useLandingPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { t } = useTranslation('common');

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  return { t, closeModalHandler, openModalHandler, showModal };
};

export default useLandingPage;
