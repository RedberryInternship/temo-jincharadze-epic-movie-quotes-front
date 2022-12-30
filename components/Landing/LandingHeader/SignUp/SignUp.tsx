import { Button, Google, Input } from 'components';

const SignUp = () => {
  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-2xl font-medium'>Create an account</h2>
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
            placeholder='Enter your name'
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
            placeholder='Password'
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
      </div>
    </div>
  );
};

export default SignUp;