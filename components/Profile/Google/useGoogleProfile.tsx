import { useGetUserData, useProfile } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useMutation } from 'react-query';
import { checkusername, updateGoogleProfile } from 'services';

const useGoogleProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPromptOpen, setIsPromptOpen] = useState<boolean>(false);
  const [saveChanges, setSaveChanges] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [disabledInput, setDisabledInput] = useState<boolean>(true);

  useGetUserData();
  const { name, id, avatarLoader, emails, image: avatarImage } = useProfile();

  const { t } = useTranslation('forms');
  const { push } = useRouter();

  const form = useForm<{ username: string; image: string | File }>({
    mode: 'all',
    defaultValues: { username: name, image: avatarImage },
  });

  const {
    formState: { errors },
    setValue,
    getValues,
    setError,
    control,
    handleSubmit,
  } = form;

  useWatch({ control: control, name: ['image'] });
  const newAvatar = getValues('image');

  useEffect(() => {
    if (typeof newAvatar !== 'string') {
      setSaveChanges(true);
    }
  }, [newAvatar]);

  const closeShowSuccessHandler = () => {
    setShowSuccess(false);
  };

  const usernameOptions = {
    minLength: { value: 3, message: t('errors.min') },
    maxLength: { value: 15, message: t('errors.max') },
    pattern: {
      value: /^[a-z0-9]*$/,
      message: t('errors.usernamePattern'),
    },
  };

  const closeAddUser = () => {
    setValue('username', '');
    setIsOpen(false);
  };

  const closePrompt = () => {
    setIsPromptOpen(false);
    setIsOpen(true);
  };

  const confirmPrompt = () => {
    setIsPromptOpen(false);
    setSaveChanges(true);
  };

  const clearInputs = () => {
    setValue('image', '');
    setValue('username', '');
    setSaveChanges(false);
  };

  const checkUsernameHandler = async () => {
    const getUsername = getValues('username');
    if (getUsername) {
      try {
        await checkusername({ username: getUsername, userId: +id });
        setIsOpen(false);
        setIsPromptOpen(true);
      } catch (error: any) {
        setError('username', { message: t('unique.name')! });
      }
    }
  };

  const { mutate } = useMutation(updateGoogleProfile, {
    onSuccess: () => {
      setSaveChanges(false);
      setValue('username', '');
      setValue('image', '');
      setDisabledInput(true);
      push('/profile');
      setShowSuccess(true);
    },
    onError: () => {
      setError('username', { message: t('unique.name')! });
    },
  });

  const disabledHandler = () => {
    setDisabledInput(false);
    setSaveChanges(true);
  };

  const updateProfile = () => {
    mutate({
      username: getValues('username') ? getValues('username') : name,
      userId: +id,
      image: getValues('image') ? getValues('image') : avatarImage,
    });
  };

  return {
    avatarLoader,
    name,
    emails,
    isOpen,
    setIsOpen,
    form,
    usernameOptions,
    errors,
    closeAddUser,
    checkUsernameHandler,
    isPromptOpen,
    closePrompt,
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
  };
};

export default useGoogleProfile;
