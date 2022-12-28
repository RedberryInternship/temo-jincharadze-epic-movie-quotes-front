import { Fragment } from 'react';
import { Footer } from './LandingFooter';
import { LandingMovie } from './LandingMovies';

const LandingPage = () => {
  return (
    <Fragment>
      <div className='h-[30.3125rem] bg-top-gradient w-full flex justify-center items-center flex-col'>
        <h1 className='text-custom-orange-200 text-2xl text-center'>
          Find any quote in <br />
          millions of movie lines
        </h1>
        <button className='text-white px-[0.875rem] py-[0.4375rem] bg-custom-red-600 rounded mt-8'>
          Get started
        </button>
      </div>

      <LandingMovie
        width='max-w-[19rem]'
        image='bg-interstellar'
        movie='Interstellar, 2014'
        quote='You have to leave somethig behind to go forward'
      />
      <LandingMovie
        width='max-w-[17.063rem]'
        image='bg-royal '
        movie='The Royal Tenenbaums,2001'
        quote='I think we’re just gonna
        have to be secretly in love
        with earch other and
        leave it that'
      />
      <LandingMovie
        width='max-w-[18.32rem]'
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
