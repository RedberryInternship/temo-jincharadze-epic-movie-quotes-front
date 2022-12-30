import { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={props.containerClass}>
      <div className='mb-2'>
        <label className='text-white text-base font-normal'>
          {props.label} <span className='text-custom-red-500'>*</span>
        </label>
      </div>
      <div>
        <input
          {...props.register}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className='h-[2.4rem] px-2 pl-3 w-full border border-custom-gray-300 text-base focus:ring-0 focus:border-current font-normal'
        />
      </div>
    </div>
  );
};

export default Input;
