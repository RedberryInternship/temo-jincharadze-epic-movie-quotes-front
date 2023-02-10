import { CloseSuccess, Success } from 'components';

const Updated = (props: { close: React.MouseEventHandler; text: string }) => {
  return (
    <>
      <div
        className='bg-dashboard-color opacity-60 absolute w-full h-full z-[1] top-0'
        onClick={props.close}
      />
      <div className='px-8 absolute top-10 w-full z-[1] lg:right-12 lg:w-max'>
        <div className='bg-success-bg border border-solid rounded border-custom-slate-300'>
          <div className='flex items-center relative p-4'>
            <Success />
            <p className='font-normal text-base text-custom-green-900 ml-2 lg:pr-10'>
              {props.text}
            </p>
            <div
              className='absolute right-5 top-5 cursor-pointer'
              onClick={props.close}
            >
              <CloseSuccess />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updated;
