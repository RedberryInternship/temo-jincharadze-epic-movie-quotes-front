import { ArrowLeft, useMobileSearch } from 'components';
import { FormProvider } from 'react-hook-form';

const MobileSearch = () => {
  const { form, handleSearch, handleSubmit, register, t } = useMobileSearch();

  return (
    <div className='bg-neutral-900 w-full h-screen fixed top-0 left-0 z-[20]'>
      <div className='flex items-center py-5 pl-8 pr-5'>
        <ArrowLeft />
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(handleSearch)} className='w-full'>
            <div className='flex items-center'>
              <input
                {...register('search')}
                placeholder={t('movies.search')!}
                type='text'
                className='p-0 ml-7 text-base w-full bg-transparent text-white border-0 focus:ring-0 focus:border-0 placeholder-white'
              />
            </div>
          </form>
        </FormProvider>
      </div>
      <div className='border-search-border border-b  w-full' />
      <div className='pl-[4.5rem]'>
        <div className='text-mobile-search font-base font-normal mt-7'>
          {t('quotes.enterMovie')}
        </div>
        <div className='text-mobile-search font-base font-normal mt-5'>
          {t('quotes.enterQuote')}
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
