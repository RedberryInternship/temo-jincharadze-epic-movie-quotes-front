import { AddMovie, Button, Dashboard, Search } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useGetUserData } from 'hooks';
import Link from 'next/link';

const Index = () => {
  const { isFocused, setIsFocused } = useGetUserData();
  return (
    <Dashboard>
      <div className='pt-7 md:w-full'>
        <div className='flex justify-between items-center'>
          <h1 className='text-white text-2xl font-medium pr-1'>
            My list of movies
          </h1>
          <div className='flex'>
            <div className='relative flex items-center'>
              <form className='hidden mg:flex'>
                <div className='flex items-center'>
                  <Button type='submit'>
                    <Search />
                  </Button>
                  <input
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder='Search'
                    type='text'
                    className={`p-0 ml-4 text-xl w-16 bg-transparent border-0 focus:ring-0 focus:border-0 text-search-border ${
                      isFocused
                        ? 'w-24 ml:w-[12.5rem] lg:w-96 xl:w-[43rem] duration-[0.4s] ease-in-out'
                        : ''
                    }`}
                  />
                </div>
                {isFocused && (
                  <div className='border-search-border border-b absolute left-0 bottom-0 w-full top-6' />
                )}
              </form>
            </div>
            <Link href='/movie-list?show=add-movie' className='ml-8'>
              <div className='bg-custom-red-600 hover:bg-custom-red-700 flex items-center justify-center rounded w-32 h-10'>
                <AddMovie />
                <p className='text-white font-normal text-base ml-2'>
                  Add movie
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className='text-base font-medium text-white mt-2'>(Total 25)</div>
      </div>
    </Dashboard>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'notification',
      ])),
    },
  };
};
