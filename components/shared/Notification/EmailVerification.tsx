import { SentIcon } from 'components';
import React from 'react';

const EmailVerification = () => {
  return (
    <div className='w-[22.5rem]'>
      <div className='text-center'>
        <SentIcon />
        <h2 className='text-white text-2xl font-medium mt-4'>Thank you!</h2>
        <p className='text-white font-normal mt-6 text-xs text-center'>
          Please check your email and follow the instructions to activate your
          account.
        </p>
      </div>
      <div className='w-full mt-6'>
        <a href='' className='bg-custom-red-600 w-48 h-10 text-center'>
          Go to my email
        </a>
      </div>
    </div>
  );
};

export default EmailVerification;
