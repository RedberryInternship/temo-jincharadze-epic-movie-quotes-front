import { useTranslation } from 'next-i18next';
import { useForm, useWatch } from 'react-hook-form';
import { getCsrfToken, loginUser } from 'services';
import { deleteCookie } from 'cookies-next';
import { LoginForm } from './types';

const useLogin = () => {
  const form = useForm<LoginForm>({
    mode: 'all',
    defaultValues: { login: '', password: '', remember: '' },
  });
  const { t } = useTranslation('forms');

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
        await loginUser(data);
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

  return { t, form, register, handleLogin, errors };
};

export default useLogin;
