import { Button, Google, Input } from 'components';
import { SignUpProps } from './types';

const SignUp: React.FC<SignUpProps> = (props) => {
  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-2xl font-medium text-3.5'>
          Create an account
        </h2>
        <p className='text-custom-gray-500 text-base font-normal mt-3'>
          Start your journey!
        </p>
      </div>
      <div className='w-full'>
        <form>
          <Input
            label='Name'
            type='text'
            name='username'
            placeholder='At least 3 & max.15 lower case characters'
          />
          <Input
            containerClass='mt-8'
            label='Email'
            type='email'
            name='email'
            placeholder='Enter your email'
          />
          <Input
            containerClass='mt-8'
            label='Password'
            type='password'
            name='password'
            placeholder='At least 8 & max.15 lower case characters'
          />
          <Input
            containerClass='mt-8'
            label='Confirm password'
            type='password'
            name='confirm_password'
            placeholder='Password'
          />
          <Button className='bg-custom-red-600 hover:bg-red-400 w-full text-white text-center h-[2.4rem] mt-10 rounded'>
            Get started
          </Button>
        </form>
        <Button className='w-full mt-4 border h-[2.4rem] rounded hover:bg-white hover:text-black'>
          <div className='flex items-center justify-center'>
            <Google />
            <span className='ml-2'>Sign up with Google</span>
          </div>
        </Button>
        <div className='mt-8 flex justify-center'>
          <p className='text-base font-normal text-custom-gray-500'>
            Already have an account?
            <span
              className='text-custom-blue-600 underline ml-1 cursor-pointer'
              onClick={props.onLoginClick}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
