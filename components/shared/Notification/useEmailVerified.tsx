import { useDispatch } from 'react-redux';
import { showModalActions } from 'store';

const useEmailVerified = () => {
  const dispatch = useDispatch();

  const showLoginHandler = () => {
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('login'));
  };

  return { showLoginHandler };
};

export default useEmailVerified;
