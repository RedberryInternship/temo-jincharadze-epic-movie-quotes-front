import {
  AddMovies,
  Button,
  Dashboard,
  Search,
  AddMovie,
  Quote,
  SsrWrapper,
} from 'components';
import { useMovie } from 'hooks';
import Link from 'next/link';
import Image from 'next/image';
import { FormProvider } from 'react-hook-form';
import { AllMoveTypes } from './types';
import Head from 'next/head';

const AllMovies = () => {
  const {
    isFocused,
    setIsFocused,
    query,
    data,
    i18n,
    form,
    register,
    handleSubmit,
    handleSearch,
    t,
  } = useMovie();

  return (
    <>
      <Head>
        <title>All Movies</title>
      </Head>
      {query.show === 'add-movie' && <AddMovies />}

      <Dashboard>
        <div className='pt-7 md:w-full relative px-10'>
          {query.show === 'add-movie' && (
            <Link href='/movie-list'>
              <div className='absolute w-[calc(100%_-_80px)] z-[3] h-screen bg-dashboard-color opacity-60' />
            </Link>
          )}
          <div className='flex justify-between items-center'>
            <h1 className='text-white text-2xl font-medium pr-1 flex items-center'>
              {t('movies.myListOfMovies')}
              <span className='text-2xl font-medium text-white hidden lg:flex ml-4'>
                ({t('movies.total')} {data?.data.length})
              </span>
            </h1>
            <div className='flex'>
              <div className='relative flex items-center'>
                <FormProvider {...form}>
                  <form
                    className='hidden mg:flex'
                    onSubmit={handleSubmit(handleSearch)}
                  >
                    <div className='flex items-center'>
                      <Button type='submit' className='block lg:hidden'>
                        <Search />
                      </Button>
                      <label htmlFor='search' className='hidden lg:block'>
                        <Search />
                      </label>
                      <input
                        id='search'
                        {...register('search')}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder={t('movies.search')!}
                        type='text'
                        className={`p-0 ml-4 text-xl w-16 bg-transparent  border-0 focus:ring-0 focus:border-0 text-custom-gray-300 ${
                          isFocused
                            ? 'w-44 ml:w-[15rem] lg:w-80 xl:w-[43rem] duration-[0.4s] ease-in-out'
                            : ''
                        }`}
                      />
                    </div>
                    {isFocused && (
                      <div className='border-search-border border-b absolute left-0 bottom-0 w-full top-6' />
                    )}
                  </form>
                </FormProvider>
              </div>
              <Link href='/movie-list?show=add-movie' className='ml-8'>
                <div className='bg-custom-red-600 hover:bg-custom-red-700 flex items-center justify-center rounded w-max px-3 md:px-4 h-10 md:h-12'>
                  <SsrWrapper>
                    <div
                      className={`text-white flex items-center font-normal text-base md:text-xl ${
                        i18n.language === 'ka' && 'text-xs md:text-base'
                      }`}
                    >
                      <AddMovie />

                      <p className='ml-2'>{t('movies.addMovie')}</p>
                    </div>
                  </SsrWrapper>
                </div>
              </Link>
            </div>
          </div>
          <div className='text-base font-medium text-white mt-2 lg:hidden'>
            ({t('movies.total')} {data?.data.length})
          </div>
          <div className='mt-9 pb-9 grid lg:grid-cols-3 md:grid-cols-2 gap-x-12'>
            {data?.data.map((movie: AllMoveTypes) => {
              return (
                <div key={movie.id} className='mb-16 col-span-3 md:col-span-1'>
                  <Link href={`/movie-list/${movie.id}`}>
                    <Image
                      src={movie.image}
                      loader={() => movie.image}
                      width={440}
                      height={371}
                      unoptimized={true}
                      alt='img'
                      style={{ width: '100%', height: '302px' }}
                      className='rounded-xl object-cover w-full'
                    />
                  </Link>

                  <Link href={`/movie-list/${movie.id}`}>
                    <h1 className='text-2xl font-medium text-white mt-4 truncate md:uppercase'>
                      {i18n.language === 'ka' ? movie.name.ka : movie.name.en}
                      <span className='ml-2'>({movie.year})</span>
                    </h1>
                  </Link>

                  <div className='mt-4 text-xl font-medium flex items-center'>
                    <span className='text-white mr-3'>
                      {movie.quotes_count}
                    </span>
                    <Quote />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default AllMovies;
