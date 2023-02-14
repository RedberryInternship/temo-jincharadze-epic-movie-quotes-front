import { Button, LanguageSelector, useLandingHeader } from 'components';
import Link from 'next/link';
import { LandingHeaderProps } from './types';

const LandingHeader: React.FC<LandingHeaderProps> = (props) => {
  const { t } = useLandingHeader();

  return (
    <div className='fixed z-[4] text-white px-9 py-6 w-full'>
      <header>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <h1 className='uppercase text-base font-medium text-custom-orange-200'>
              Movie quotes
            </h1>
          </Link>
          <div className='flex items-center'>
            <LanguageSelector />
            <div className='pr-4 hidden md:flex'>
              <Button
                className='bg-custom-red-600 hover:bg-custom-red-700 rounded-s h-10 w-28'
                onClick={props.onSignUpClick}
              >
                {t('header.signUp')}
              </Button>
            </div>
            <Button
              className='border-white border hover:bg-white hover:text-black rounded-s h-10 w-24'
              onClick={props.onLoginClick}
            >
              {t('header.login')}
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingHeader;
