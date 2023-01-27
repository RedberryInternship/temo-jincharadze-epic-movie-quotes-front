import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const useDragDropFile = () => {
  const form = useFormContext();
  const { getValues, setValue, setError, register, clearErrors } = form;
  const image = getValues('image');
  const { t } = useTranslation('forms');

  const [preview, setPreview] = useState<string>('');

  useEffect(() => {
    if (!image.name) {
      setPreview('');
      return;
    }
    const objectUrl: string = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const onDragEnter = () => wrapperRef.current?.classList.add('opacity-60');
  const onDragLeave = () => wrapperRef.current?.classList.remove('opacity-60');
  const onDrop = () => wrapperRef.current?.classList.remove('opacity-60');

  const onFileDrop = (e: { target: HTMLInputElement }) => {
    const newFile = e.target.files![0];
    if (newFile && !newFile.type.startsWith('image/')) {
      setValue('image', '');
      setError('image', { message: t('errors.file')! });
      return;
    }

    if (newFile) {
      setValue('image', newFile);
      clearErrors('image');
    }
  };

  return {
    preview,
    onDragEnter,
    onDragLeave,
    onDrop,
    onFileDrop,
    wrapperRef,
    register,
    getValues,
    image,
    t,
  };
};

export default useDragDropFile;
