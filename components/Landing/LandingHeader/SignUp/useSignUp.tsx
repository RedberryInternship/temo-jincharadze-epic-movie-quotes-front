import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { SignUpForm } from './types';

const useSignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const form = useForm<SignUpForm>({
    mode: 'all',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });
  const { t } = useTranslation('forms');

  const {
    formState: { errors, isValid },
    control,
    register,
    getValues,
    getFieldState,
  } = form;

  const [username, email, password, confirmPassword] = useWatch({
    control: control,
    name: ['username', 'email', 'password', 'confirm_password'],
  });

  const showPasswordhandler = () => {
    setShowPassword((prev) => !prev);
  };

  const showConfirmPasswordhandler = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return {
    t,
    form,
    getValues,
    register,
    getFieldState,
    formState: { errors, isValid },
    showPasswordhandler,
    showPassword,
    showConfirmPasswordhandler,
    showConfirmPassword,
  };
};

export default useSignUp;
