import {
  LanguageSelector,
  Menu,
  Ring,
  Button,
  useNavigation,
  Search,
  Quote,
  QuoteHeart,
} from 'components';
import { formatDate } from 'helper';
import Image from 'next/image';
import Link from 'next/link';
import { NotificationTypes } from './types';

const Navigation = () => {
  const {
    panelToggleHandler,
    logoutHandler,
    t,
    pathname,
    isNotificationOpen,
    userNotification,
    readHandler,
    filterHasNew,
    refEl,
    refRing,
    markAllReadHandler,
  } = useNavigation();

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

          <div className='flex items-center relative'>
            <div className='mr-8'>
              <LanguageSelector wrapper='pr-0' dropdown='right-5' />
            </div>
            {pathname === '/news-feed' && (
              <Link
                href='/news-feed?show=search'
                className='mr-5 cursor-pointer md:hidden'
              >
                <Search />
              </Link>
            )}
            <div className='cursor-pointer relative' ref={refRing}>
              <Ring />
              {filterHasNew?.length ? (
                <div className='bg-custom-red-600 rounded-full w-6 flex justify-center text-white text-base font-medium absolute -top-1 left-4'>
                  {filterHasNew.length}
                </div>
              ) : null}
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

            {isNotificationOpen && (
              <div
                ref={refEl}
                className='bg-black px-9 py-6 rounded-xl backdrop-blur-xl w-full h-screen fixed top-[86px] pb-32 left-0 text-white after:content-[" "]  after:absolute after:right-[2.1rem] after:-top-5 after:border-t-0 after:border-r-[1.3rem] after:border-r-transparent after:border-l-[1.3rem] after:border-l-transparent after:border-b-[1.6rem] after:border-black'
              >
                <div className='overflow-auto h-full'>
                  <div className='flex justify-between items-center mb-6'>
                    <div className='text-white text-xl font-medium'>
                      {t('notifications')}
                    </div>
                    <div
                      className='underline text-white text-sm font-normal cursor-pointer'
                      onClick={markAllReadHandler}
                    >
                      {t('markAllAsRead')}
                    </div>
                  </div>

                  {userNotification?.data.length &&
                    userNotification?.data.map(
                      (notification: NotificationTypes) => {
                        return (
                          <div
                            key={notification.id}
                            className='border-notification-border border rounded border-solid flex p-4 w-full h-max hover:opacity-90 cursor-pointer mb-2'
                            onClick={() =>
                              readHandler(
                                notification.quote_id,
                                notification.quote.movie_id
                              )
                            }
                          >
                            <div>
                              <Image
                                width={60}
                                height={60}
                                alt='image'
                                src={notification.sender.image}
                                className={`rounded-full h-[60px] w-[60px] ${
                                  notification.has_new &&
                                  ' border-custom-green-700 border-[2px]'
                                }`}
                                loader={() => notification.sender.image}
                                unoptimized={true}
                              />
                              {notification.has_new === 1 && (
                                <div className='text-base font-normal text-custom-green-700 text-center'>
                                  {t('new')}
                                </div>
                              )}
                            </div>
                            <div className='ml-3'>
                              <h2 className='text-xl font-normal text-white'>
                                {notification.sender.name}
                              </h2>
                              <div className='flex mt-1'>
                                {notification.has_comment ? (
                                  <Quote />
                                ) : (
                                  <QuoteHeart />
                                )}

                                <p className='font-base font-normal text-custom-gray-300 ml-3'>
                                  {notification.has_comment
                                    ? t('commented')
                                    : t('liked')}
                                </p>
                              </div>
                              <div className='text-base font-normal text-custom-zinc-300 mt-1'>
                                {formatDate(notification.created_at, t)}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
