import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`font-normal text-base text-white ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
