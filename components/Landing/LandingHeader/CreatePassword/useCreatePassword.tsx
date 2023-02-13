import { useTranslation } from 'next-i18next';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getCsrfToken, updatePassword } from 'services';
import { showModalActions } from 'store';

const useCreatePassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { query } = Router;

  const dispatch = useDispatch();
  const form = useForm<{ password: string; confirm_password: string }>({
    mode: 'all',
    defaultValues: {
      password: '',
      confirm_password: '',
    },
  });

  const { t } = useTranslation('forms');

  const { push } = useRouter();

  const {
    formState: { errors },
    control,
    getValues,
    setError,
    handleSubmit,
    getFieldState,
  } = form;

  useWatch({
    control: control,
    name: ['password', 'confirm_password'],
  });

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

  const backToLogin = () => {
    push('/?type=login');
  };

  const resetPasswordHandler = async (data: {
    password: string;
    confirm_password: string;
  }) => {
    const newFormData = {
      ...data,
      email: query.email,
    };

    try {
      setIsLoading(true);
      await getCsrfToken();
      await updatePassword(newFormData);
      setIsLoading(false);
      dispatch(showModalActions.setModalValue('password changed'));
    } catch (err: any) {
      setIsLoading(false);
      err.response.data.errors.name &&
        setError('password', {
          message: t('errors.confirmPassword')!,
        });
    }
  };

  return {
    t,
    form,
    errors,
    showPassword,
    showConfirmPassword,
    showPasswordhandler,
    showConfirmPasswordhandler,
    getValues,
    isLoading,
    handleSubmit,
    resetPasswordHandler,
    getFieldState,
    backToLogin,
    passwordOptions,
    confirmPasswordOptions,
  };
};

export default useCreatePassword;
