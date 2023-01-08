import { useTranslation } from 'next-i18next';
import Router from 'next/router';
import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updatePassword } from 'services';
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

  const { t, i18n } = useTranslation('forms');

  const {
    formState: { errors, isValid },
    control,
    register,
    getValues,
    setError,
    getFieldState,
  } = form;

  const [password, confirmPassword] = useWatch({
    control: control,
    name: ['password', 'confirm_password'],
  });

  const showPasswordhandler = () => {
    setShowPassword((prev) => !prev);
  };

  const showConfirmPasswordhandler = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const backToLogin = () => {
    dispatch(showModalActions.setModalValue('login'));
  };

  const resetPasswordHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const values = getValues();
      const newFormData = {
        password: values.password,
        confirm_password: values.confirm_password,
        email: query.email,
      };

      try {
        setIsLoading(true);
        const sendData = await updatePassword(newFormData);
        setIsLoading(false);
        dispatch(showModalActions.setModalValue('password changed'));
      } catch (err: any) {
        setIsLoading(false);
        if (err.response.data.errors.name) {
          setError('password', {
            message: t('errors.confirmPassword')!,
          });
        }
      }
    }
  };

  return {
    t,
    form,
    errors,
    register,
    showPassword,
    showConfirmPassword,
    showPasswordhandler,
    showConfirmPasswordhandler,
    getValues,
    isLoading,
    resetPasswordHandler,
    getFieldState,
    backToLogin,
  };
};

export default useCreatePassword;
