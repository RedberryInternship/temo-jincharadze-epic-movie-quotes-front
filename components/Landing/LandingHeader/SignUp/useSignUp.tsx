import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import {
  getCsrfToken,
  getGoogleUrl,
  googleCallBack,
  registerUser,
} from 'services';
import { showModalActions } from 'store';
import { SignUpForm } from './types';

const useSignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { push, locale, asPath, query } = useRouter();
  const { from, prompt, code } = query;

  const form = useForm<SignUpForm>({
    mode: 'all',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });
  const { t, i18n } = useTranslation('forms');

  const {
    formState: { errors, isValid },
    control,
    register,
    getValues,
    setError,
    handleSubmit,
    getFieldState,
  } = form;

  useWatch({
    control: control,
    name: ['username', 'email', 'password', 'confirm_password'],
  });

  const usernameOptions = {
    required: { value: true, message: t('errors.required') },
    minLength: { value: 3, message: t('errors.min') },
    maxLength: { value: 15, message: t('errors.max') },
    pattern: {
      value: /^[a-z0-9]*$/,
      message: t('errors.usernamePattern'),
    },
  };

  const emailOptions = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
      message: t('errors.emailPattern'),
    },
  };

  const passwordOptions = {
    required: { value: true, message: t('errors.required') },
    minLength: { value: 8, message: t('errors.minPassword') },
    maxLength: { value: 15, message: t('errors.max') },
    pattern: {
      value: /^[a-z0-9]*$/,
      message: t('errors.passwordPattern'),
    },
  };

  const confirmPasswordOptions = {
    validate: (value: string) => value === getValues('password'),
  };

  const showPasswordhandler = () => {
    setShowPassword((prev) => !prev);
  };

  const showConfirmPasswordhandler = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleRegister = async (data: SignUpForm) => {
    const newFormData = {
      name: data.username,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
      lang: i18n.language,
    };

    try {
      setIsLoading(true);
      await getCsrfToken();
      await registerUser(newFormData);
      setIsLoading(false);
      push('/');
      dispatch(showModalActions.setModalIsOpen(true));
      dispatch(showModalActions.setModalValue('email sent'));
    } catch (err: any) {
      setIsLoading(false);
      err.response.data.errors.name &&
        setError('username', {
          message: t('unique.name')!,
        });

      err.response.data.errors.email &&
        setError('email', {
          message: t('unique.email')!,
        });
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const response = await getGoogleUrl(locale as string, 'register');
      response.status === 200 && push(response.data.url);
    } catch (err: any) {}
  };

  const handleGoogleAuth = async () => {
    try {
      dispatch(showModalActions.setModalIsOpen(true));
      await googleCallBack(asPath, locale as string, 'register');
      dispatch(showModalActions.setModalIsOpen(false));
      push('/');
    } catch (error) {
      dispatch(showModalActions.setModalValue('register'));
      setError('email', { message: t('unique.email')! });
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
    register,
    getFieldState,
    formState: { errors, isValid },
    showPasswordhandler,
    showPassword,
    showConfirmPasswordhandler,
    showConfirmPassword,
    isLoading,
    handleSubmit,
    handleRegister,
    handleGoogleRegister,
    usernameOptions,
    emailOptions,
    passwordOptions,
    confirmPasswordOptions,
  };
};

export default useSignUp;
