import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { verifySecondaryEmail } from 'services';
import Router from 'next/router';
import { showEmailActions, showModalActions } from 'store';
import { getCookie } from 'cookies-next';

const useVerifySecondaryEmail = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  let link: string;
  const isAuth = getCookie('isAuth');

  const checkEmail = async () => {
    try {
      let url = new URL(query.verify?.toString()!);
      let params = new URLSearchParams(url.search);
      params.append('expires', query.expires as string);
      params.append('signature', query.signature as string);
      link = '/api/verify-email' + '?' + params;
    } catch (err) {}
  };

  checkEmail();

  const verifyAccount = async () => {
    try {
      const response = await verifySecondaryEmail(link);
      if (response.data === 'Verified') {
        if (isAuth) {
          Router.replace('/profile?mode=show-email');
          dispatch(showEmailActions.setIsEmailVerified(true));
          return;
        }
        Router.replace('/');
        dispatch(showModalActions.setModalIsOpen(true));
        dispatch(showModalActions.setModalValue('accountVerified'));
      }

      if (response.data === 'Email is already verified') {
        if (!isAuth) {
          dispatch(showModalActions.setModalIsOpen(true));
          dispatch(showModalActions.setModalValue('accountAlreadyVerified'));
          return;
        }
        Router.replace('/403');
      }
    } catch (err: any) {
      if (err.response.data === 'Route expired') {
        Router.replace('/403');
      }
    }
  };

  const { data } = useQuery({
    queryKey: ['verify secondary email'],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!query.verify && !!query.signature && !!query.expires,
    queryFn: verifyAccount,
  });

  return { data, dispatch };
};

export default useVerifySecondaryEmail;
