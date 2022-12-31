import { ArrowLeft, Button, Input } from 'components';
import { ForgotPasswordTypes } from './types';

const ForgotPassword: React.FC<ForgotPasswordTypes> = (props) => {
  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-2xl font-medium text-3.5'>
          Forgot password?
        </h2>
        <p className='text-custom-gray-500 text-base font-normal mt-3'>
          Enter the email and we’ll send an email with instructions to reset
          your password
        </p>
      </div>
      <div className='w-full'>
        <form>
          <Input
            containerClass='mt-8'
            label='Email'
            type='email'
            name='email'
            placeholder='Enter your email'
          />

          <Button className='bg-custom-red-600 hover:bg-red-400 w-full text-white text-center h-[2.4rem] mt-10 rounded'>
            Send instructions
          </Button>
        </form>
        <div className='mt-8 flex justify-center'>
          <ArrowLeft />
          <p className='text-base font-normal text-custom-gray-500'>
            Back to log in
            <span
              className='text-custom-blue-600 underline ml-1 cursor-pointer'
              onClick={props.backToLoginClick}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
