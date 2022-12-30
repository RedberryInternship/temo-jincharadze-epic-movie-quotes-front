import { FormWrapperProps } from './types';

const FormWrapper: React.FC<FormWrapperProps> = (props) => {
  return (
    <div className='h-screen w-full fixed bg-custom-zinc-800 z-[6] flex justify-center items-center'>
      {props.children}
    </div>
  );
};

export default FormWrapper;
