import {
  LanguageSelector,
  Menu,
  Ring,
  Button,
  useNavigation,
  Search,
} from 'components';
import Link from 'next/link';

const Navigation = () => {
  const { panelToggleHandler, logoutHandler, t, pathname } = useNavigation();

  return (
    <div className='fixed z-[5] top-0'>
      <div className='bg-dashboard-color w-full'></div>
      <div className='bg-header-rgba w-screen h-[5.4rem] flex items-center'>
        <div className='flex items-center justify-between px-10 w-full'>
          <div className='hidden md:flex'>
            <h1 className='uppercase text-base font-medium text-custom-orange-200'>
              Movie quotes
            </h1>
          </div>
          <div
            onClick={panelToggleHandler}
            className='cursor-pointer md:hidden'
          >
            <Menu />
          </div>
          <div className='flex items-center'>
            {pathname === '/news-feed' && (
              <Link
                href='/news-feed?show=search'
                className='mr-5 cursor-pointer md:hidden'
              >
                <Search />
              </Link>
            )}
            <div className='cursor-pointer relative'>
              <Ring />
              <div className='bg-custom-red-600 rounded-full w-6 flex justify-center text-white text-base font-medium absolute -top-1 left-4'>
                3
              </div>
            </div>
            <div className='ml-8'>
              <LanguageSelector wrapper='pr-0' dropdown='right-5' />
            </div>
            <div className='text-center ml-10 hidden md:flex'>
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
      </div>
    </div>
  );
};

export default Navigation;
