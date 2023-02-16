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
import { useEffect, useState } from 'react';

const useLogin = () => {
  const [inputError, setInputError] = useState('');

  const form = useForm<LoginForm>({
    mode: 'all',
    defaultValues: { login: '', password: '', remember: '' },
  });
  const { t } = useTranslation('forms');

  const dispatch = useDispatch();
  const { query, push, asPath, locale, replace } = useRouter();
  const { from, prompt, code } = query;

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = form;

  useWatch({
    control: control,
    name: ['login', 'password', 'remember'],
  });

  const loginOptions = {
    required: { value: true, message: t('errors.required') },
  };

  const passwordOptions = {
    required: { value: true, message: t('errors.required') },
  };

  useEffect(() => {
    inputError === 'Email not found!' &&
      setError('login', { message: t('exists.email')! });

    inputError === 'Username not found!' &&
      setError('login', { message: t('exists.name')! });

    inputError === 'Your email is not verified.' &&
      setError('login', { message: t('verify.email')! });

    inputError === 'Invalid Credentials' &&
      setError('password', { message: t('password')! });
  }, [inputError, setError, t]);

  const handleLogin = async (data: LoginForm) => {
    const newFormData = {
      ...data,
    };
    try {
      await getCsrfToken();
      const response = await loginUser(newFormData);
      response.status === 200 && setCookie('isAuth', true);
      replace('/news-feed');
    } catch (error: any) {
      error.response.data.message === 'Email not found!' &&
        setInputError('Email not found!');

      error.response.data.message === 'Username not found!' &&
        setInputError('Username not found!');

      error.response.data.message === 'Your email is not verified.' &&
        setInputError('Your email is not verified.');

      error.response.data.message === 'Invalid Credentials' &&
        setInputError('Invalid Credentials');

      deleteCookie('XSRF-TOKEN');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await getGoogleUrl(locale as string, 'login');
      response.status === 200 && push(response.data.url);
    } catch (err: any) {}
  };

  const handleGoogleAuth = async () => {
    dispatch(showModalActions.setIsLoading(false));

    try {
      dispatch(showModalActions.setIsLoading(true));
      dispatch(showModalActions.setModalIsOpen(true));
      await googleCallBack(asPath, locale as string, 'login');
      setCookie('isAuth', true);
      dispatch(showModalActions.setModalIsOpen(false));
      replace('/news-feed');
    } catch (error) {
      dispatch(showModalActions.setIsLoading(false));
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

  return {
    t,
    form,
    handleLogin,
    errors,
    handleGoogleLogin,
    handleSubmit,
    loginOptions,
    passwordOptions,
  };
};

export default useLogin;
