import { Eye, InputError } from 'components';
import { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => {
  return props.type === 'checkbox' ? (
    <div className={props.containerClass}>
      <input
        type='checkbox'
        name={props.name}
        className='rounded-[0.25rem] mr-2'
      />
      <label className='text-white text-base font-normal'>{props.label}</label>
    </div>
  ) : (
    <div className={props.containerClass}>
      <div className='mb-2'>
        <label className='text-white text-base font-normal'>
          {props.label} <span className='text-custom-red-500'>*</span>
        </label>
      </div>
      <div className='relative'>
        <input
          {...props.register}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className='text-custom-gray-500 rounded h-[2.4rem] px-2 pl-3 w-full border focus:ring-0 border-custom-gray-300 text-base focus:border-custom-gray-300 focus:outline-none outline-none font-normal'
        />
        {props.type === 'password' && (
          <>
            {props.error && (
              <div className='absolute top-[0.7rem] right-10 '>
                <InputError />
              </div>
            )}
            <div className='absolute top-0 pt-[0.8rem] right-0 pr-[0.9rem] cursor-pointer bg-white h-full z-[2] rounded'>
              <div>
                <Eye />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
