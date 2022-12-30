import { LanguageSelector, useLandingHeader } from 'components';

const LandingHeader = () => {
  const { t } = useLandingHeader();

  return (
    <div className='fixed z-40 text-white px-9 py-6 w-full'>
      <header>
        <div className='flex items-center justify-between'>
          <h1 className='uppercase text-base font-medium text-custom-orange-200'>
            Movie quotes
          </h1>
          <div className='flex items-center'>
            <LanguageSelector />
            <div className='pr-4 hidden md:flex'>
              <button className='font-normal text-base text-white bg-custom-red-600 hover:bg-red-400 rounded-s h-10 w-28'>
                {t('header.signUp')}
              </button>
            </div>
            <button className='font-normal text-base text-white border border-white hover:bg-white hover:text-black rounded-s h-10 w-24'>
              {t('header.login')}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingHeader;
