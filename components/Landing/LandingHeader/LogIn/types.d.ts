export type LoginProps = {
  onSignUpClick: MouseEvent<HTMLSpanElement>;
  onForgotPassword: MouseEvent<HTMLDivElement>;
};

export type LoginForm = {
  email: string;
  password: string;
};
