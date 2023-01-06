import { Verified } from 'components/icons';
import React from 'react';
import useEmailVerified from './useEmailVerified';

const EmailAlreadyVerified = () => {
  const { showLoginHandler } = useEmailVerified();
  return (
    <div className='w-[22.5rem]'>
      <div className='text-center flex flex-col items-center'>
        <Verified />
        <h2 className='text-white text-2xl font-medium mt-10'>
          Email is already verified!
        </h2>
      </div>
      <div className='mt-8 text-center'>
        <button
          className='bg-custom-red-600 hover:bg-custom-red-700 w-48
          md:w-full h-10 text-center rounded'
          onClick={showLoginHandler}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default EmailAlreadyVerified;
