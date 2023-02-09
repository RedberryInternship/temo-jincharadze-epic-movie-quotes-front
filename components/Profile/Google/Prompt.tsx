import { PromptProps } from './types';

const Prompt = (props: PromptProps) => {
  return (
    <div className='px-10'>
      <div className='relative'>
        <div className='bg-prompt-bg w-full -rotate-180 opacity-30 rounded-xl h-52' />
        <div className='absolute top-0 pt-16 w-full'>
          <div className='text-center w-full'>
            <p className='text-white'>{props.areYouSureText}</p>
          </div>
          <div className='border-b border-solid border-border-b mt-11 w-full' />
          <div className='flex items-center justify-between mt-5 px-5'>
            <div
              className='text-white text-base font-normal cursor-pointer'
              onClick={props.closePrompt}
            >
              {props.cancelText}
            </div>
            <div
              className='bg-custom-red-600 hover:bg-custom-red-700 py-2 px-[0.4rem] rounded text-white cursor-pointer text-base font-normal'
              onClick={props.confirmPrompt}
            >
              {props.confirmText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
