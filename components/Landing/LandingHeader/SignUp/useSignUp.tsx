import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from 'services';
import { showModalActions } from 'store';
import { SignUpForm } from './types';

const useSignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

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
    getFieldState,
  } = form;

  useWatch({
    control: control,
    name: ['username', 'email', 'password', 'confirm_password'],
  });

  const showPasswordhandler = () => {
    setShowPassword((prev) => !prev);
  };

  const showConfirmPasswordhandler = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isValid) {
      const values = getValues();
      const newFormData = {
        name: values.username,
        email: values.email,
        password: values.password,
        confirm_password: values.confirm_password,
        lang: i18n.language,
      };

      try {
        setIsLoading(true);
        await registerUser(newFormData);
        setIsLoading(false);
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
    }
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
    isLoading,
    handleRegister,
  };
};

export default useSignUp;
