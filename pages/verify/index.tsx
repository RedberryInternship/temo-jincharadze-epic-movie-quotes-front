import { useVerify } from 'hooks';
import Router from 'next/router';
import { showModalActions } from 'store';

const index = () => {
  const { data, dispatch } = useVerify();

  if (data?.data === 'Verified') {
    Router.replace('/');
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('accountVerified'));
    return;
  }

  if (data?.data === 'Email is already verified') {
    Router.replace('/');
    dispatch(showModalActions.setModalIsOpen(true));
    dispatch(showModalActions.setModalValue('accountAlreadyVerified'));
    return;
  }

  if (data?.data === 'Route expired') {
    Router.replace('/403');
    return;
  }
};

export default index;
