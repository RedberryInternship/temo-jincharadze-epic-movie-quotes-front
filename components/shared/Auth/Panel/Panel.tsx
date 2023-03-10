import { Button, Close, Home, Movie, usePanel } from 'components';
import Image from 'next/image';
import Link from 'next/link';

const Panel = () => {
  const {
    name,
    image,
    avatarLoader,
    panelCloseHandler,
    pathname,
    t,
    logoutHandler,
  } = usePanel();
  return (
    <>
      <div
        className='fixed top-0 left-0 w-full h-screen z-[1] bg-blur-bg backdrop-blur-sm md:hidden'
        onClick={panelCloseHandler}
      />
      <div className='sticky h-screen w-full md:w-max z-[2] md:mr-32'>
        <div className='bg-panel-color md:bg-transparent max-w-[24rem] md:w-max h-full w-screen rounded-tr-xl rounded-br-xl pt-10 md:pt-8'>
          <div className='pl-11 md:pl-0'>
            <div
              className='absolute right-5 top-5 cursor-pointer  md:hidden'
              onClick={panelCloseHandler}
            >
              <Close />
            </div>
            <div className='flex items-center'>
              <div>
                {image && (
                  <Image
                    src={image}
                    className={`rounded-full h-10 lg:h-[3.75rem] lg:w-[3.75rem] object-cover ${
                      pathname === '/profile' && 'border border-custom-red-600'
                    }`}
                    alt='user image'
                    width={40}
                    height={40}
                    loader={avatarLoader}
                    unoptimized={true}
                  />
                )}
              </div>
              <div className='ml-5'>
                <h2 className='text-xl lg:text-2xl font-normal text-white'>
                  {name}
                </h2>
                <Link href='/profile' onClick={panelCloseHandler}>
                  <p className='text-custom-gray-300 text-sm lg:text-base'>
                    {t('movies.editProfile')}
                  </p>
                </Link>
              </div>
            </div>
            <Link
              href='/news-feed'
              onClick={panelCloseHandler}
              className='text-xl lg:text-2xl font-normal text-white mt-10 flex items-center'
            >
              <div className='lg:ml-3'>
                <Home
                  fill={pathname.startsWith('/news-feed') ? '#E31221' : '#fff'}
                />
              </div>
              <p className='ml-8 lg:ml-11 hover:text-custom-red-700'>
                {t('movies.newsFeed')}
              </p>
            </Link>
            <Link
              href='/movie-list'
              onClick={panelCloseHandler}
              className='text-xl lg:text-2xl font-normal text-white flex mt-10 items-center'
            >
              <div className='lg:ml-3'>
                <Movie
                  fill={pathname.startsWith('/movie-list') ? '#E31221' : '#fff'}
                />
              </div>
              <p className='ml-8 lg:ml-11 hover:text-custom-red-700'>
                {t('movies.listOfMovies')}
              </p>
            </Link>
          </div>
          <div className='text-center mt-10 md:hidden'>
            <Button
              className='w-24 border h-[2.4rem] rounded hover:bg-white hover:text-black'
              onClick={logoutHandler}
            >
              <div className='flex items-center justify-center'>
                {t('logout')}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
