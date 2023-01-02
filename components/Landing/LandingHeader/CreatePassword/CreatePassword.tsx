import { Button, Input, ArrowLeft } from 'components';
import { CreatePasswordProps } from './types';

const CreatePassword: React.FC<CreatePasswordProps> = (props) => {
  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-2xl font-medium'>Create new password</h2>
        <p className='text-custom-gray-500 text-xs font-normal mt-3'>
          Your new password must be different from previous used passwords
        </p>
      </div>
      <div className='w-full'>
        <form>
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
            Reset password
          </Button>
        </form>
        <div
          className='mt-8 flex justify-center items-center cursor-pointer'
          onClick={props.backToLoginClick}
        >
          <ArrowLeft />
          <p className='text-base font-normal text-custom-gray-500 ml-3'>
            Back to log in
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
