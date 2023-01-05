import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { registereUser } from 'services';
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
    setError,
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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isValid) {
      const values = getValues();
      const newFormData = {
        name: values.username,
        email: values.email,
        password: values.password,
        confirm_password: values.confirm_password,
      };

      try {
        const sendData = await registereUser(newFormData);
      } catch (err: any) {
        if (err.response.data.errors.name) {
          setError('username', {
            message: t('unique.name')!,
          });
        }
        if (err.response.data.errors.email) {
          setError('email', {
            message: t('unique.email')!,
          });
        }
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
    handleRegister,
  };
};

export default useSignUp;
