import { Button, useMobileSearch, Search, PensilSquare } from 'components';
import Link from 'next/link';
import { FormProvider } from 'react-hook-form';

const DesktopSearch = () => {
  const {
    form,
    register,
    isFocused,
    setIsFocused,
    t,
    handleSearch,
    handleSubmit,
  } = useMobileSearch();

  return (
    <FormProvider {...form}>
      <form
        className='hidden md:block w-full'
        onSubmit={handleSubmit(handleSearch)}
      >
        <div className='flex items-center'>
          <div className={`${!isFocused && 'w-full'} relative`}>
            <div
              className={`bg-zinc-800 opacity-60 rounded-xl  h-full top-0 absolute left-0 w-full ${
                !isFocused && 'w-full'
              }`}
            />
            <Link href='/news-feed?show=write-quote'>
              <div className='flex py-3 px-4 items-center relative min-w-max'>
                <PensilSquare />
                <p className='text-xl font-normal text-white ml-4'>
                  {t('quotes.writeNewQuote')}
                </p>
              </div>
            </Link>
          </div>
          <div className={`flex ${isFocused && 'w-full'} ml-8`}>
            <Button type='submit'>
              <Search />
            </Button>
            <input
              {...register('search')}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={
                isFocused ? t('quotes.desktopSearch')! : t('quotes.searchBy')!
              }
              type='text'
              className={`p-0 ml-4 text-xl  bg-transparent border-0 focus:ring-0 focus:border-0 text-custom-gray-300 ${
                isFocused ? 'w-full duration-[0.4s] ease-in-out' : 'w-[6rem]'
              }`}
            />
          </div>
        </div>
        {isFocused && (
          <div className='border-search-border border-b absolute left-0 bottom-0 w-full top-6' />
        )}
      </form>
    </FormProvider>
  );
};

export default DesktopSearch;
