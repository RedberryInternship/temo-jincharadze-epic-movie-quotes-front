import { UseFormRegisterReturn, UseFormGetFieldState } from 'react-hook-form';

export type InputProps = {
  containerClass?: string;
  label: string;
  type: string;
  name: string;
  hasEye?: boolean;
  value?: string;
  showPassword?: boolean;
  placeholder?: string;
  onPasswordShow?: MouseEvent<HTMLDivElement>;
  register?: UseFormRegisterReturn<string>;
};
