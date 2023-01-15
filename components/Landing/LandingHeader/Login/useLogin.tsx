import { useTranslation } from 'next-i18next';
import { useForm, useWatch } from 'react-hook-form';
import {
  getCsrfToken,
  getGoogleUrl,
  googleCallBack,
  loginUser,
} from 'services';
import { deleteCookie, setCookie } from 'cookies-next';
import { LoginForm } from './types';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { showModalActions } from 'store';

const useLogin = () => {
  const form = useForm<LoginForm>({
    mode: 'all',
    defaultValues: { login: '', password: '', remember: '' },
  });
  const { t } = useTranslation('forms');

  const dispatch = useDispatch();
  const { query, push, asPath, locale } = useRouter();
  const { from, prompt, code } = query;

  const {
    control,
    register,
    setError,
    formState: { isValid, errors },
  } = form;

  const [login, password, remember] = useWatch({
    control: control,
    name: ['login', 'password', 'remember'],
  });

  const data = { login, password, remember };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      try {
        await getCsrfToken();
        const response = await loginUser(data);
        response.status === 200 && setCookie('user', response.data.user.id);
      } catch (error: any) {
        error.response.data.message === 'Email not found!' &&
          setError('login', { message: t('exists.email')! });

        error.response.data.message === 'Username not found!' &&
          setError('login', { message: t('exists.name')! });

        error.response.data.message === 'Your email is not verified.' &&
          setError('login', { message: t('verify.email')! });

        error.response.data.message === 'Invalid Credentials' &&
          setError('password', { message: t('password')! });

        deleteCookie('XSRF-TOKEN');
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await getGoogleUrl(locale as string, 'login');
      response.status === 200 && push(response.data.url);
    } catch (err: any) {}
  };

  const handleGoogleAuth = async () => {
    try {
      dispatch(showModalActions.setModalIsOpen(true));
      await googleCallBack(asPath, locale as string, 'login');
      dispatch(showModalActions.setModalIsOpen(false));
      push('/');
    } catch (error) {
      dispatch(showModalActions.setModalValue('login'));
      setError('login', { message: t('unique.email')! });
    }
  };

  useQuery({
    queryKey: ['google callback', asPath],
    queryFn: handleGoogleAuth,
    enabled: !!from && !!code && !!prompt,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return { t, form, register, handleLogin, errors, handleGoogleLogin };
};

export default useLogin;
