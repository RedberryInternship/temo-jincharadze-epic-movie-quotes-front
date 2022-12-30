import { Button, Google, Input } from 'components';

const LogIn = () => {
  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-2xl font-medium text-3.5'>
          Log in to your account
        </h2>
        <p className='text-custom-gray-500 text-base font-normal mt-3'>
          Welcome back! Please enter your details.
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
          <Input
            containerClass='mt-8'
            label='Password'
            type='password'
            name='password'
            placeholder='Password'
          />

          <div className='flex items-center justify-between mt-8'>
            <Input
              type='checkbox'
              name='remember'
              label='Remember me'
              containerClass='flex items-center h-4'
            />

            <div className='text-custom-blue-600 cursor-pointer  underline text-base font-normal'>
              Forgot password
            </div>
          </div>

          <Button className='bg-custom-red-600 hover:bg-red-400 w-full text-white text-center h-[2.4rem] mt-10 rounded'>
            Sign in
          </Button>
        </form>
        <Button className='w-full mt-4 border h-[2.4rem] rounded hover:bg-white hover:text-black'>
          <div className='flex items-center justify-center'>
            <Google />
            <span className='ml-2'>Sign in with Google</span>
          </div>
        </Button>
        <div className='mt-8 flex justify-center'>
          <p className='text-base font-normal text-custom-gray-500'>
            Don't have an account?
            <span className='text-custom-blue-600 underline ml-1'>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
