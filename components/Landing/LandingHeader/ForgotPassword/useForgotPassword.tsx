import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { checkPasswordResetEmail } from 'services';
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
    register,
    getValues,
    setError,
    formState: { errors, isValid },
  } = form;
  const { t, i18n } = useTranslation('forms');

  const email = useWatch({ control: control });

  const checkEmailHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const values = getValues();

      const newFormData = {
        email: values.email,
        lang: i18n.language,
      };
      try {
        setIsLoading(true);
        const response = await checkPasswordResetEmail(newFormData);
        setIsLoading(false);
        dispatch(showModalActions.setModalValue('password reset sent'));
      } catch (err: any) {
        setIsLoading(false);
        if (err.response.data.errors.email) {
          setError('email', {
            message: t('exists.email')!,
          });
        }
        if (
          err.response.data.message === 'Your account email is not verified'
        ) {
          setError('email', {
            message: t('verify.email')!,
          });
        }
      }
    }
  };

  return { t, register, errors, form, checkEmailHandler, isLoading };
};

export default useForgotPassword;
