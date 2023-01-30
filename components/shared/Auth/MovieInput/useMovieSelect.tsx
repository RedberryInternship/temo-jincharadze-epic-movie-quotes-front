import { useGetAllTags } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const useMovieSelect = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useGetAllTags();

  const { i18n, t } = useTranslation('forms');
  const form = useFormContext();
  const { getValues, register, setValue, trigger } = form;

  const handleOpen = () => {
    !isOpen && setIsOpen(true);
  };

  const handleClose = () => {
    trigger('tags');
    setIsOpen(false);
  };

  const getTags = data && data!.data.map((e: []) => e);

  const tagIds = getValues('tags');

  const tagNames =
    tagIds.length &&
    getTags?.filter((data: { id: number }) =>
      tagIds.includes(data.id.toString())
    );

  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.contentRect.height;
      }
    });
    if (dropDownRef.current) {
      observer.observe(dropDownRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const removeTagHandler = (tag: string) => {
    const updatedIds = tagIds.filter((id: string) => id !== tag);
    setValue('tags', updatedIds);
  };

  const requiredOption = {
    required: { value: true, message: t('errors.required') },
  };

  return {
    data,
    tagNames,
    i18n,
    getValues,
    register,
    dropDownRef,
    removeTagHandler,
    requiredOption,
    t,
    handleOpen,
    isOpen,
    handleClose,
  };
};

export default useMovieSelect;
