import { BackDropProps } from './types';

const Backdrop: React.FC<BackDropProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className='fixed top-0 left-0 w-full h-screen z-[5] bg-blur-bg'
    />
  );
};

export default Backdrop;
