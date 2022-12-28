import { PropsTypes } from './types';

const LandingMovie: React.FC<PropsTypes> = (props) => {
  return (
    <div className='h-screen relative'>
      <div className='bg-movies-gradient w-full h-full absolute z-20' />
      <div
        className={`absolute h-full w-screen z-10 bg-no-repeat bg-cover bg-fixed bg-center ${props.image}`}
      />

      <div className='top-[20rem] absolute flex z-20 ml-9'>
        <h1 className='flex text-white'>
          <div className='w-[1.0625rem] bg-white h-[0.125rem] mt-3 mr-2' />
          <div className='flex flex-col'>
            <h1
              className={`max-w-[19rem] w-full text-xl leading-8 ${props.width}`}
            >
              “{props.quote}”
            </h1>
            <h1 className='mt-3 text-base text-custom-zinc-300'>
              {props.movie}
            </h1>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default LandingMovie;
