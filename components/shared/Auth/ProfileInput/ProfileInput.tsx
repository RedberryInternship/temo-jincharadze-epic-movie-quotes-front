import { ProfileInputProps } from './types';
import { useProfileInput } from 'components';

const ProfileInput: React.FC<ProfileInputProps> = (props) => {
  const { register } = useProfileInput();

  return (
    <div className={props.containerClass}>
      {props.label && (
        <div className='mb-2'>
          <label className='text-white text-base font-normal'>
            {props.label}
          </label>
        </div>
      )}
      <div className='relative'>
        <input
          value={props.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          {...register(props.name!, props.options)}
          type={props.type}
          name={props.name}
          className={`text-black bg-custom-gray-300 pl-4 pr-11 py-3 md:py-2 h-12 placeholder-white border-custom-gray-500 rounded w-full border focus:ring-0  text-base md:text-xl focus:outline-none focus:border-custom-gray-500  border-solid  outline-none font-normal ${props.inputClass}`}
        />
      </div>
    </div>
  );
};

export default ProfileInput;
