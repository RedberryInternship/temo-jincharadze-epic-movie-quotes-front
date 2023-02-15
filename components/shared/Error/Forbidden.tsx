import { Gandolf } from 'components';
import { useNotificationLang } from 'hooks';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Forbidden = () => {
  const { t } = useNotificationLang();
  return (
    <>
      <Head>
        <title>Forbidden</title>
      </Head>
      <div className='bg-top-gradient h-screen w-full flex flex-col justify-center items-center'>
        <Gandolf />
        <h2 className='text-2xl text-white font-bold mt-9 md:text-47'>
          {t('forbidden.title')}
        </h2>
        <p className='text-base md:text-2xl font-medium text-center text-white mt-4 max-w-[18.5rem] md:max-w-none'>
          {t('forbidden.description')}
        </p>
        <Link href='/' className='mt-8'>
          <div className='w-[9.4rem] h-10 md:h-12 text-base md:text-xl bg-custom-red-600 hover:bg-custom-red-700 flex items-center justify-center text-white rounded font-normal '>
            {t('forbidden.btn')}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Forbidden;
