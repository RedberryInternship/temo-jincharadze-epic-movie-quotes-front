import { Gandolf } from 'components';
import Link from 'next/link';
import React from 'react';

const Forbidden = () => {
  return (
    <div className='bg-top-gradient h-screen w-full flex flex-col justify-center items-center'>
      <Gandolf />
      <h2 className='text-2xl text-white font-bold mt-9 md:text-47'>
        You shall not pass!
      </h2>
      <p className='text-base md:text-2xl font-medium text-center text-white mt-4 max-w-[18.5rem] md:max-w-none'>
        Sorry, but you don’t have permission to access this page
      </p>
      <Link href='/' className='mt-8'>
        <div className='w-[9.4rem] h-10 md:h-12 text-base md:text-xl bg-custom-red-600 flex items-center justify-center text-white rounded font-normal '>
          Return home
        </div>
      </Link>
    </div>
  );
};

export default Forbidden;
