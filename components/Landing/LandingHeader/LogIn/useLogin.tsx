import { useTranslation } from 'next-i18next';
import { useForm, useWatch } from 'react-hook-form';
import { LoginForm } from './types';

const useLogin = () => {
  const form = useForm<LoginForm>({
    mode: 'all',
    defaultValues: { email: '', password: '' },
  });

  const { control } = form;

  const [email, password] = useWatch({
    control: control,
    name: ['email', 'password'],
  });

  const { t } = useTranslation('forms');

  return { t, form };
};

export default useLogin;
