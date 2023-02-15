import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { checkPasswordResetEmail, getCsrfToken } from 'services';
import { showModalActions } from 'store';

const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const form = useForm<{ email: string }>({
    mode: 'all',
    defaultValues: { email: '' },
  });

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = form;
  const { t, i18n } = useTranslation('forms');

  useWatch({ control: control, name: 'email' });

  const emailOptions = {
    required: { value: true, message: t('errors.required') },
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
      message: t('errors.emailPattern'),
    },
  };

  const checkEmailHandler = async (data: { email: string }) => {
    const newFormData = {
      ...data,
      lang: i18n.language,
    };
    try {
      setIsLoading(true);
      await getCsrfToken();
      await checkPasswordResetEmail(newFormData);
      setIsLoading(false);
      dispatch(showModalActions.setModalValue('password reset sent'));
    } catch (err: any) {
      console.log(err);
      setIsLoading(false);

      err.response.data.message === 'Cannot reset password on google email' &&
        setError('email', {
          message: t('forgotPassword.googleEmail')!,
        });
      err.response.data.errors?.email &&
        setError('email', {
          message: t('exists.email')!,
        });

      err.response.data.message === 'Your account email is not verified' &&
        setError('email', {
          message: t('verify.email')!,
        });
    }
  };

  return {
    t,
    errors,
    form,
    checkEmailHandler,
    isLoading,
    handleSubmit,
    emailOptions,
  };
};

export default useForgotPassword;
