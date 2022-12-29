import { ArrowDown, useLanguageSelector } from 'components';
import React from 'react';

const LanguageSelector = () => {
  const { toggle, toggleClickHandler, refEl } = useLanguageSelector();

  return (
    <div className='relative' ref={refEl}>
      <div
        className='flex items-center cursor-pointer'
        onClick={toggleClickHandler}
      >
        <div className='mr-[0.64rem] font-normal text-base'>Eng</div>
        <ArrowDown />
      </div>
      {toggle && (
        <div className='absolute bg-white top-10'>
          <div className='py-2 text-black px-3 text-base hover:bg-black hover:text-white cursor-pointer'>
            ქართული
          </div>
          <div className='text-black py-2 px-3 text-base hover:bg-black hover:text-white cursor-pointer'>
            English
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
