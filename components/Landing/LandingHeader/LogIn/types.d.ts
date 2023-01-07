export type LoginProps = {
  onSignUpClick: MouseEvent<HTMLSpanElement>;
  onForgotPassword: MouseEvent<HTMLDivElement>;
};

export type LoginForm = {
  login: string;
  password: string;
  remember: string;
};
