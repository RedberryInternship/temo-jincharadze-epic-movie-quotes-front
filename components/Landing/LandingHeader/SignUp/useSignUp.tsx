import { useTranslation } from 'next-i18next';
import { useForm, useWatch } from 'react-hook-form';
import { SignUpForm } from './types';

const useSignUp = () => {
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

  const username = useWatch({ control: control, name: 'username' });
  const email = useWatch({ control: control, name: 'email' });
  const password = useWatch({ control: control, name: 'password' });
  const confirmPassword = useWatch({
    control: control,
    name: 'confirm_password',
  });

  return {
    t,
    form,
    getValues,
    register,
    getFieldState,
    formState: { errors, isValid },
  };
};

export default useSignUp;
