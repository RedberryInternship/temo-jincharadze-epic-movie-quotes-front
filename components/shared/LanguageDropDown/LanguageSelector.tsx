import { ArrowDown, useLanguageSelector } from 'components';

const LanguageSelector = (props: { wrapper?: string; dropdown?: string }) => {
  const { toggle, toggleClickHandler, refEl, language, localeHandler } =
    useLanguageSelector();

  return (
    <div className={`relative pr-10 pl-1 ${props.wrapper}`} ref={refEl}>
      <div
        className='flex items-center cursor-pointer'
        onClick={toggleClickHandler}
      >
        <div className='mr-[0.7rem] font-normal text-base text-white'>
          {language === 'ka' ? 'ქართ' : 'Eng'}
        </div>
        <ArrowDown />
      </div>
      {toggle && (
        <div className={`absolute bg-white top-10 ${props.dropdown}`}>
          <div
            className='py-2 text-black px-3 text-base hover:bg-black hover:text-white cursor-pointer'
            onClick={() => localeHandler('ka')}
          >
            ქართული
          </div>
          <div
            className='text-black py-2 px-3 text-base hover:bg-black hover:text-white cursor-pointer'
            onClick={() => localeHandler('en')}
          >
            English
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
