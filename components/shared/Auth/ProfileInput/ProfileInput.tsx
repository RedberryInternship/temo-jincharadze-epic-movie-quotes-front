import { ProfileInputProps } from './types';
import { Eye, ShowEye, useProfileInput } from 'components';

const ProfileInput: React.FC<ProfileInputProps> = (props) => {
  const { register, query, t } = useProfileInput();

  return (
    <div className={`${props.containerClass} lg:max-w-[33rem] w-full`}>
      {props.label && (
        <div className='mb-2'>
          <label
            className={`text-white text-base font-normal ${
              query.mode === 'add-email' && 'lg:text-2xl lg:font-medium'
            }`}
          >
            {props.label}
          </label>
          {query.mode === 'add-email' && (
            <div className='border-b border-solid border-border-b mt-6  mb-8 lg:block hidden' />
          )}
        </div>
      )}
      <div className='relative'>
        {query.mode === 'add-email' && (
          <div className='hidden lg:block lg:mt-14 lg:mb-2'>
            {t('profile.newEmail')}
          </div>
        )}
        <input
          value={props.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          {...register(props.name!, props.options)}
          type={props.type}
          name={props.name}
          className={`text-black bg-custom-gray-300 pl-4 pr-11 py-3 md:py-2 h-12 placeholder-white border-custom-gray-500 rounded w-full border focus:ring-0  text-base md:text-xl focus:outline-none focus:border-custom-gray-500  border-solid  outline-none font-normal ${props.inputClass}`}
        />
        {props.hasEye && (
          <div className='absolute top-1 pt-[0.8rem] right-0 pr-[0.9rem] cursor-pointer'>
            {props.name === 'password' && (
              <div onClick={props.onPasswordShow!}>
                {!props.showPassword! ? <Eye /> : <ShowEye />}
              </div>
            )}
            {props.name === 'confirm_password' && (
              <div onClick={props.onPasswordShow!}>
                {!props.showPassword! ? <Eye /> : <ShowEye />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInput;
