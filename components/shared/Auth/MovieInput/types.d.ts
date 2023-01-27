import { UseFormRegisterReturn } from 'react-hook-form';

export type MovieInputProps = {
  containerClass?: string;
  label?: string;
  register?: UseFormRegisterReturn<string>;
  type?: string;
  name?: string;
  placeholder?: string;
  language?: string;
  disabled?: boolean;
  textAreaClass?: string;
  value?: string;
};

export type MovieTags = {
  id: number;
  name: { en: string; ka: string };
};
