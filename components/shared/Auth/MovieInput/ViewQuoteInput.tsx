import { ViewQuoteInputTypes } from './types';

const ViewQuoteInput: React.FC<ViewQuoteInputTypes> = (props) => {
  return (
    <div className={props.containerClass}>
      <div className='relative'>
        <textarea
          value={props.value}
          disabled={props.disabled}
          name={props.name}
          placeholder={props.placeholder}
          className={`text-white bg-transparent pl-4 pr-12 py-3 md:text-xl h-[5.4rem] placeholder-white border-custom-gray-500 rounded w-full border focus:ring-0  text-base focus:outline-none focus:border-custom-gray-500  border-solid  outline-none font-normal ${props.textAreaClass}`}
        />
        <p className='absolute top-2.5 right-4 text-base md:text-xl font-normal text-custom-gray-500'>
          {props.language}
        </p>
      </div>
    </div>
  );
};

export default ViewQuoteInput;
