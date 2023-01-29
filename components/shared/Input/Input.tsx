import { Eye, InputError, ShowEye, useInput, Valid } from 'components';
import { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => {
  const { invalid, isDirty, register } = useInput(props.name);

  return props.type === 'checkbox' ? (
    <div className={props.containerClass}>
      <input
        {...register(props.name!)}
        type='checkbox'
        name={props.name}
        className='rounded-[0.25rem] mr-2'
        value={props.value}
      />
      <label className='text-white text-base font-normal' htmlFor={props.name}>
        {props.label}
      </label>
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
          {...register(props.name!, props.options)}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className={`text-custom-gray-500 rounded h-[2.4rem] ${
            props.type === 'password' ? 'pr-14' : 'pr-8'
          }  pl-3 w-full border focus:ring-0 ${
            invalid
              ? 'border-custom-red-600 focus:border-custom-red-600'
              : isDirty && !invalid
              ? 'border-custom-green-700 focus:border-custom-green-700'
              : 'border-custom-gray-300 focus:border-custom-gray-300'
          }  text-base focus:outline-none border-solid  outline-none font-normal`}
        />

        {!props.hasEye && invalid && (
          <div className='absolute top-0 pt-[0.7rem] right-0 pr-3'>
            <InputError />
          </div>
        )}

        {!props.hasEye && !invalid && isDirty && (
          <div className='absolute top-0 pt-[0.7rem] right-0 pr-3 z-[2]'>
            <Valid />
          </div>
        )}
        {props.hasEye === true && (
          <>
            {!invalid && isDirty && (
              <div className='absolute top-[0.7rem] right-10 z-[2]'>
                <Valid />
              </div>
            )}
            {invalid && (
              <div className='absolute top-[0.7rem] right-10'>
                <InputError />
              </div>
            )}
            <div className='absolute top-0 pt-[0.8rem] right-0 pr-[0.9rem] cursor-pointer'>
              {props.name === 'password' && (
                <div onClick={props.onPasswordShow}>
                  {!props.showPassword ? <Eye /> : <ShowEye />}
                </div>
              )}
              {props.name === 'confirm_password' && (
                <div onClick={props.onPasswordShow}>
                  {!props.showPassword ? <Eye /> : <ShowEye />}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
