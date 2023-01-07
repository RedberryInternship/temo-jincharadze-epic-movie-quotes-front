import { useTranslation } from 'next-i18next';
import { useForm, useWatch } from 'react-hook-form';
import { getCsrfToken, loginUser } from 'services';
import { deleteCookie, setCookie } from 'cookies-next';
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
    getValues,
    formState: { isValid },
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
        const response = await loginUser(data);
      } catch (error) {
        deleteCookie('XSRF-TOKEN');
      }
    }
  };

  return { t, form, register, handleLogin };
};

export default useLogin;
