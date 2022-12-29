import { Fragment } from 'react';
import { Footer, LandingMovie } from 'components';

const LandingPage = () => {
  return (
    <Fragment>
      <div className='bg-starting-gradient absolute z-20 top-0 w-screen h-screen' />
      <div className='h-[30.3125rem] md:h-[50.5rem] bg-top-gradient w-full flex justify-center items-center flex-col'>
        <h1 className='text-custom-orange-200 text-2xl md:text-6xl  text-center relative z-30 leading-9 md:leading-[5.625rem] font-bold'>
          Find any quote in <br />
          millions of movie lines
        </h1>
        <button className='text-white px-[0.875rem] md:px-[1rem] py-[0.4375rem] md:py-[0.5625rem]  bg-custom-red-600 rounded mt-8 relative z-30 text-base md:text-xl font-normal'>
          Get started
        </button>
      </div>

      <LandingMovie
        width='max-w-[19rem] md:max-w-3xl'
        image='bg-interstellar'
        movie='Interstellar, 2014'
        quote='You have to leave something behind to go forward'
      />
      <LandingMovie
        width='max-w-[17.063rem] md:max-w-[62rem]'
        image='bg-royal '
        movie='The Royal Tenenbaums,2001'
        quote='I think we’re just gonna
        have to be secretly in love
        with earch other and
        leave it that'
      />
      <LandingMovie
        width='max-w-[18.32rem] md:max-w-[62rem]'
        image='bg-lord'
        movie='The Lord of the Rings, 2003  '
        quote='I see in your eyes the same
        fear that would take the 
        heart of me....'
      />

      <Footer />
    </Fragment>
  );
};

export default LandingPage;
