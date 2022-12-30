import { FieldValues, UseFormRegister } from 'react-hook-form';

export type InputProps = {
  containerClass: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
};
