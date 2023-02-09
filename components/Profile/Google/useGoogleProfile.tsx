import { useGetUserData, useProfile } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkusername,
  updateGoogleProfile,
  updateProfilePassword,
  updateUsername,
} from 'services';
import { showEmailActions } from 'store';

const useGoogleProfile = () => {
  const [saveChanges, setSaveChanges] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [disabledInput, setDisabledInput] = useState<boolean>(true);
  const [disabledPassword, setDisabledPassword] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [nameUpdated, setNameUpdated] = useState<boolean>(false);
  const [passwordUpdated, setPasswordUpdated] = useState<boolean>(false);

  useGetUserData();

  const dispatch = useDispatch();

  const emailModal = useSelector(
    (state: {
      email: {
        modal: {
          showAddEmailSuccess: boolean;
          primaryChanged: boolean;
          isEmailVerified: boolean;
        };
      };
    }) => state.email.modal
  );

  const closeEmailAddSuccess = () => {
    dispatch(showEmailActions.setShowAddEmailSuccess(false));
  };

  const closeEmailVerifiedSuccess = () => {
    dispatch(showEmailActions.setIsEmailVerified(false));
  };

  const closePrimaryChangeSuccess = () => {
    dispatch(showEmailActions.setPrimaryChanged(false));
  };

  const { name, id, avatarLoader, emails, image: avatarImage } = useProfile();

  const { t } = useTranslation('forms');
  const { push, query } = useRouter();

  const form = useForm<{
    username: string;
    image: string | File;
    password?: string;
    confirm_password?: string;
  }>({
    mode: 'all',
    defaultValues: {
      username: name,
      image: avatarImage,
      password: '',
      confirm_password: '',
    },
  });

  const {
    formState: { errors, isValid },
    setValue,
    getValues,
    setError,
    control,
    handleSubmit,
    clearErrors,
  } = form;

  useWatch({
    control: control,
    name: ['image', 'password', 'confirm_password'],
  });
  const newAvatar = getValues('image');

  useEffect(() => {
    if (typeof newAvatar !== 'string') {
      setSaveChanges(true);
    }
  }, [newAvatar]);

  const showPasswordhandler = () => {
    setShowPassword((prev) => !prev);
  };

  const showAddUserHandler = () => {
    push('/profile?mode=edit-username');
  };

  const showConfirmPasswordHandler = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const closeShowSuccessHandler = () => {
    setShowSuccess(false);
  };

  const closeNameUpdated = () => {
    setNameUpdated(false);
  };

  const closePasswordUpdated = () => {
    setPasswordUpdated(false);
  };

  const usernameOptions = {
    minLength: { value: 3, message: t('errors.min') },
    maxLength: { value: 15, message: t('errors.max') },
    pattern: {
      value: /^[a-z0-9]*$/,
      message: t('errors.usernamePattern'),
    },
  };

  const passwordOptions = {
    minLength: { value: 8, message: t('errors.minPassword') },
    maxLength: { value: 15, message: t('errors.max') },
    pattern: {
      value: /^[a-z0-9]*$/,
      message: t('errors.passwordPattern'),
    },
  };

  const confirmPasswordOptions = {
    validate: (value: string) => value == getValues('password'),
  };

  const checkPasswordHandler = () => {
    if (!getValues('password')) {
      return setError('password', { message: t('errors.required')! });
    }
    getValues('password') !== getValues('confirm_password')
      ? setError('password', { message: t('errors.confirmPassword')! })
      : push('/profile?mode=password-confirm');
    setSaveChanges(true);
  };

  const closeAddUser = () => {
    clearErrors('username');
    setValue('username', '');
    push('/profile');
  };

  const closeAddPassword = () => {
    clearErrors('password');
    clearErrors('confirm_password');
    setValue('password', '');
    setValue('confirm_password', '');
    push('/profile');
  };

  const closeUserNamePrompt = () => {
    push('/profile?mode=edit-username');
  };

  const closePasswordPrompt = () => {
    push('/profile?mode=edit-password');
  };

  const confirmPrompt = () => {
    setSaveChanges(true);
    push('/profile');
  };

  const clearInputs = () => {
    setValue('image', '');
    setValue('username', '');
    setValue('password', '');
    setValue('confirm_password', '');
    setSaveChanges(false);
    setDisabledInput(true);
    setDisabledPassword(true);
    clearErrors('username');
    clearErrors('password');
    push('/profile');
  };

  const passwordOpenHandler = () => {
    push('/profile?mode=edit-password');
  };

  const desktopPasswordOpenHandler = () => {
    setSaveChanges(true);
    push('/profile?mode=edit-password');
  };

  const checkUsernameHandler = async () => {
    const getUsername = getValues('username');
    if (!getUsername) {
      return setError('username', { message: t('errors.required')! });
    }
    if (getUsername && isValid) {
      try {
        await checkusername({ username: getUsername, userId: +id });
        push('/profile?mode=username-confirm');
      } catch (error: any) {
        setError('username', { message: t('unique.name')! });
      }
    }
  };

  const { mutate } = useMutation(updateGoogleProfile, {
    onSuccess: () => {
      setValue('username', '');
      setValue('image', '');
      setValue('password', '');
      setValue('confirm_password', '');
      setDisabledInput(true);
      setShowSuccess(true);
      setSaveChanges(false);
    },
    onError: () => {
      setError('username', { message: t('unique.name')! });
    },
  });

  const { mutate: updateUsernameInstance } = useMutation(updateUsername, {
    onSuccess: () => {
      setValue('username', '');
      setNameUpdated(true);
      push('/profile');
    },
  });

  const { mutate: updatePasswordInstance } = useMutation(
    updateProfilePassword,
    {
      onSuccess: () => {
        setValue('password', '');
        setValue('confirm_password', '');
        setPasswordUpdated(true);
        push('/profile');
      },
    }
  );

  const updateUsernameHandler = () => {
    updateUsernameInstance({ username: getValues('username') });
  };

  const updatePasswordHandler = () => {
    updatePasswordInstance({
      password: getValues('password')?.toString()!,
      confirm_password: getValues('confirm_password')?.toString()!,
    });
  };

  const disabledHandler = () => {
    setDisabledInput(false);
    setSaveChanges(true);
  };

  const disabledPasswordHandler = () => {
    setDisabledPassword(false);
    setSaveChanges(true);
  };

  const updateProfile = () => {
    mutate({
      username: getValues('username') ? getValues('username') : name,
      userId: +id,
      image: getValues('image') ? getValues('image') : avatarImage,
      password: getValues('password') ? getValues('password') : '',
    });
  };

  return {
    avatarLoader,
    name,
    emails,
    form,
    usernameOptions,
    errors,
    closeAddUser,
    checkUsernameHandler,
    closeUserNamePrompt,
    confirmPrompt,
    getValues,
    clearInputs,
    saveChanges,
    updateProfile,
    handleSubmit,
    showSuccess,
    closeShowSuccessHandler,
    disabledInput,
    setDisabledInput,
    disabledHandler,
    t,
    passwordOptions,
    closeAddPassword,
    checkPasswordHandler,
    confirmPasswordOptions,
    disabledPasswordHandler,
    disabledPassword,
    passwordOpenHandler,
    showConfirmPasswordHandler,
    showPasswordhandler,
    showPassword,
    showConfirmPassword,
    desktopPasswordOpenHandler,
    emailModal,
    closeEmailAddSuccess,
    closePrimaryChangeSuccess,
    query,
    isValid,
    showAddUserHandler,
    closePasswordPrompt,
    updateUsernameHandler,
    nameUpdated,
    closeNameUpdated,
    updatePasswordHandler,
    passwordUpdated,
    closePasswordUpdated,
    closeEmailVerifiedSuccess,
  };
};

export default useGoogleProfile;
