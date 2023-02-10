import React from 'react';

export type ProfileInputMobileProps = {
  label: string;
  name: string;
  options: object;
  errors: object;
  onClose?: React.MouseEventHandler;
  checkInput?: React.MouseEventHandler;
  cancel: string;
  add: string;
  type?: string;
  confirmLabel?: string;
  confirmOptions?: object;
  hasEye?: boolean;
  showPassword?: boolean;
  onPasswordShow?: React.MouseEventHandler;
  onConfirmPasswordShow?: React.MouseEventHandler;
  showConfirmPassword?: boolean;
  confirmType?: string;
  length?: number;
  placeholder?: string;
  onAddEmailClose?: React.MouseEventHandler;
  addEmail?: React.MouseEventHandler;
};

export type ProfileStaticInputProps = {
  label: string;
  inputValue?: string;
  disabled?: boolean;
  placeholder: string;
  name?: string;
  options?: object;
  disabledHandler?: React.MouseEventHandler;
  edit: string;
  errors: object;
  editHandler?: React.MouseEventHandler;
  isPassword?: boolean;
};

export type PromptProps = {
  closePrompt: React.MouseEventHandler;
  confirmPrompt: React.MouseEventHandler;
  confirmText: string;
  cancelText: string;
  areYouSureText: string;
};
