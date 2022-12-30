import { Close } from 'components';
import { FormWrapperProps } from './types';

const FormWrapper: React.FC<FormWrapperProps> = (props) => {
  return (
    <div className='h-screen md:h-[44rem] md:w-[37.5rem] md:top-1/2 md:-translate-y-1/2  md:left-1/2 md:-translate-x-1/2  md:rounded-[0.6rem] w-full fixed bg-custom-zinc-800 z-[6] flex justify-center items-center px-2'>
      <div className='absolute top-8 right-10'>
        <Close />
      </div>
      {props.children}
    </div>
  );
};

export default FormWrapper;
