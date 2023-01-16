export type ButtonProps = {
  className: string;
  onClick?: MouseEvent<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'submit' | 'button';
};
