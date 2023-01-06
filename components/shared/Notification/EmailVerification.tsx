import { SentIcon } from 'components';
import React from 'react';

const EmailVerification = () => {
  return (
    <div className='w-[22.5rem]'>
      <div className='text-center flex flex-col items-center'>
        <SentIcon />
        <h2 className='text-white text-2xl font-medium mt-4'>Thank you!</h2>
        <p className='text-white font-normal mt-6 text-base text-center'>
          Please check your email and follow the instructions to activate your
          account.
        </p>
      </div>
      <div className='mt-6 text-center'>
        <a href='https://mail.google.com/' target='_blank'>
          <button
            className='bg-custom-red-600 hover:bg-custom-red-700 w-48
            md:w-full h-10 text-center rounded'
          >
            Go to my email
          </button>
        </a>
      </div>
    </div>
  );
};

export default EmailVerification;
