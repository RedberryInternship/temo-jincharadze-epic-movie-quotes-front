import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import {
  changePrimaryEmail,
  checkEmail,
  deleteEmail,
  getUserInfo,
  storeEmail,
} from 'services';
import { showEmailActions } from 'store';

const useUserProfile = () => {
  const { data: userInfo } = useQuery({
    queryKey: ['user emails'],
    queryFn: getUserInfo,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  const dispatch = useDispatch();

  const { push, query } = useRouter();

  const openEmailModal = () => {
    push('/profile?mode=show-email');
  };

  const openAddEmail = () => {
    push('/profile?mode=add-email');
  };

  const { t } = useTranslation('forms');

  const form = useForm<{ email: string }>({
    mode: 'all',
    defaultValues: { email: '' },
  });

  const {
    formState: { errors },
    getValues,
    setValue,
    setError,
    clearErrors,
  } = form;

  const emailOptions = {
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
      message: t('errors.emailPattern'),
    },
  };

  const email = userInfo?.data.user.emails.find(
    (email: { primary: number }) => email.primary === 1
  ) as { email: string } | undefined;

  const nonePrimary = userInfo?.data.user.emails.filter(
    (email: { primary: number }) => {
      return email.primary !== 1;
    }
  ) as [] | undefined;

  const { mutate: addEmailInstance } = useMutation(storeEmail, {
    onSuccess: () => {
      setValue('email', '');
      queryClient.invalidateQueries('user emails');
    },
    onError: () => {
      setError('email', { message: t('unique.email')! });
    },
  });

  const queryClient = useQueryClient();

  const { mutate: deleteEmailInstance } = useMutation(deleteEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('user emails');
    },
  });

  const { mutate: changeToPrimaryInstance } = useMutation(changePrimaryEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('user emails');
    },
  });

  const checkEmailHandler = async () => {
    !getValues('email') &&
      setError('email', { message: t('errors.required')! });

    try {
      await checkEmail({ email: getValues('email') });
      push('/profile?mode=email-confirm');
    } catch (error: any) {
      setError('email', { message: t('errors.required')! });
    }
  };

  const addEmailHandler = () => {
    addEmailInstance({ email: getValues('email') });
    push('/profile?mode=show-email');
    dispatch(showEmailActions.setShowAddEmailSuccess(true));
  };

  const closeEmailPrompt = () => {
    push('/profile?mode=add-email');
  };

  const closeAddEmail = () => {
    push('/profile?mode=show-email');
    setValue('email', '');
    clearErrors('email');
  };

  const deleteEmailHandler = (userEmail: string) => {
    deleteEmailInstance({ email: userEmail.toString()! });
  };

  const changeEmailToPrimaryHandler = (userEmail: string) => {
    changeToPrimaryInstance({ email: userEmail.toString()! });
  };

  return {
    email,
    form,
    errors,
    emailOptions,
    openEmailModal,
    openAddEmail,
    checkEmailHandler,
    nonePrimary,
    deleteEmailHandler,
    changeEmailToPrimaryHandler,
    t,
    query,
    addEmailHandler,
    closeEmailPrompt,
    closeAddEmail,
  };
};

export default useUserProfile;
