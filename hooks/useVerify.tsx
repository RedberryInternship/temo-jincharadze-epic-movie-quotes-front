import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { verifyEmail } from 'services';
import Router from 'next/router';
import { showModalActions } from 'store';
import { useTranslation } from 'next-i18next';

const useVerify = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { i18n } = useTranslation();
  let link: string;

  console.log(i18n.language);

  const checkEmail = async () => {
    try {
      let url = new URL(query.verify?.toString()!);
      let params = new URLSearchParams(url.search);
      params.append('expires', query.expires as string);
      params.append('signature', query.signature as string);
      link = '/api/verify-account' + '?' + params;
    } catch (err) {}
  };

  checkEmail();

  const verifyAccount: any = async () => {
    try {
      const response = await verifyEmail(link);
      if (response.data === 'Verified') {
        Router.replace('/');
        dispatch(showModalActions.setModalIsOpen(true));
        dispatch(showModalActions.setModalValue('accountVerified'));
      }

      if (response.data === 'Email is already verified') {
        Router.replace('/');
        dispatch(showModalActions.setModalIsOpen(true));
        dispatch(showModalActions.setModalValue('accountAlreadyVerified'));
      }
    } catch (err: any) {
      if (err.response.data === 'Route expired') {
        Router.push('/403');
      }
    }
  };

  const { data } = useQuery({
    queryKey: ['verify email'],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!query.verify && !!query.signature && !!query.expires,
    queryFn: verifyAccount,
  });

  return { data, dispatch };
};

export default useVerify;
