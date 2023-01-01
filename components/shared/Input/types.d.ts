import { UseFormRegisterReturn } from 'react-hook-form';
export type InputProps = {
  containerClass?: string;
  error: {} | undefined;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
};
