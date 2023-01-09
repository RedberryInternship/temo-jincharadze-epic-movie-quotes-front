import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { passwordVerify, verifyEmail } from 'services';
import Router from 'next/router';
import { showModalActions } from 'store';
import { useTranslation } from 'next-i18next';

const useVerify = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  let link: string;

  const passwordRoute = async () => {
    try {
      let url = new URL(query.verify?.toString()!);
      let params = new URLSearchParams(url.search);
      params.append('expires', query.expires as string);
      params.append('signature', query.signature as string);
      link = '/api/reset-check' + '?' + params;
    } catch (err) {}
  };

  passwordRoute();

  const validatePasswordRoute = async () => {
    try {
      const response = await passwordVerify(link);
      if (response.data.message === 'Valid token') {
        Router.push(`/?email=${response.data.email}`);
        dispatch(showModalActions.setModalIsOpen(true));
        dispatch(showModalActions.setModalValue('show create password'));
      }
    } catch (err: any) {
      if (err.response.data === 'Token expired') {
        Router.replace('/403');
      }
    }
  };

  const { data } = useQuery({
    queryKey: ['check route'],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!query.verify && !!query.signature && !!query.expires,
    queryFn: validatePasswordRoute,
  });

  return { data, dispatch };
};

export default useVerify;
