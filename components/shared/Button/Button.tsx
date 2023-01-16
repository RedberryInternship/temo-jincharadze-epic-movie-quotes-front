import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`font-normal text-base text-white ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
