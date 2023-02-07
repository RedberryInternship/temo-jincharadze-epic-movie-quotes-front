import { useProfile } from 'hooks';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const useProfileImageUpload = () => {
  const { image, avatarLoader } = useProfile();
  const form = useFormContext();
  const { getValues, setValue, register } = form;
  const avatar = getValues('image');

  const [preview, setPreview] = useState<string>('');

  useEffect(() => {
    if (!avatar.name) {
      setPreview('');
      return;
    }
    const objectUrl: string = URL.createObjectURL(avatar);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [avatar]);

  const onFileDrop = (e: { target: HTMLInputElement }) => {
    const newFile = e.target.files![0];

    if (newFile) {
      setValue('image', newFile);
    }
  };

  return {
    preview,
    onFileDrop,
    image,
    avatar,
    register,
    getValues,
    avatarLoader,
  };
};

export default useProfileImageUpload;
