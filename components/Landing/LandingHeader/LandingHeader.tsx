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
          <LanguageSelector />
          <button className='font-normal text-base text-white border border-white rounded-[0.25rem] px-[1.5938rem] py-2'>
            {t('header.login')}
          </button>
        </div>
      </header>
    </div>
  );
};

export default LandingHeader;
