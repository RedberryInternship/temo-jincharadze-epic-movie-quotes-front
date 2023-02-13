import { ErrorMessage } from '@hookform/error-message';
import { Message, ProfileInput } from 'components';
import { ProfileStaticInputProps } from './types';

const ProfileStaticInput = (props: ProfileStaticInputProps) => {
  return (
    <div>
      <p className='text-base font-normal text-white'>{props.label}</p>
      <div className='flex items-center justify-between mt-1'>
        <p className='text-lg text-white font-normal lg:hidden'>
          {props.isPassword === true ? '••••••••••••' : props.inputValue}
        </p>

        <div className='hidden lg:flex lg:flex-col h-max w-full pr-8 mt-1'>
          <div className='flex items-center w-full relative'>
            <ProfileInput
              type={props.isPassword === true ? 'password' : 'text'}
              containerClass='w-full'
              disabled={props.disabled}
              placeholder={props.placeholder}
              name={props.name!}
              options={props.options!}
              inputClass='min-w-[362px] placeholder-custom-neutral-800'
            />
            <div
              className={`text-lg lg:text-xl font-normal text-custom-gray-300 ml-8 hidden lg:block cursor-pointer ${
                !props.disabled && 'lg:hidden'
              }`}
              onClick={props.disabledHandler}
            >
              {props.edit}
            </div>
          </div>

          <div className='h-2 text-left mb-10 mt-1'>
            <ErrorMessage
              name={props.name!}
              errors={props.errors}
              render={({ message }) => <Message message={message} />}
            />
          </div>
          <div
            className={`border-b border-solid lg:max-w-[33rem] w-full border-border-b ${
              props.isPassword === true && 'lg:hidden'
            }`}
          />
        </div>

        <div
          className='text-lg font-normal text-custom-gray-300 cursor-pointer lg:hidden'
          onClick={props.editHandler}
        >
          {props.edit}
        </div>
      </div>
      <div className='border-b border-solid border-border-b mt-4 lg:hidden' />
    </div>
  );
};

export default ProfileStaticInput;
