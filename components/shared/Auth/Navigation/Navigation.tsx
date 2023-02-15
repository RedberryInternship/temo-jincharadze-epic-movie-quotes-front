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
            <Link href='/news-feed'>
              <h1 className='uppercase text-base font-medium text-custom-orange-200'>
                Movie quotes
              </h1>
            </Link>
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
                <div className='bg-custom-darker-red-600 rounded-full w-6 flex justify-center text-white text-base font-medium absolute -top-1 left-4'>
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
              <div>
                <div
                  ref={refEl}
                  className='bg-black px-9 pt-6 lg:pt-10 pb-24 lg:pb-14 rounded-xl backdrop-blur-xl md:max-w-[50rem] lg:max-w-[60rem] w-full h-screen md:max-h-[50rem] fixed top-[86px] right-0 md:mx-10 text-white after:content-[" "] after:absolute after:right-[2.1rem] md:after:right-[8.1rem] after:-top-5 after:border-t-0 after:border-r-[1.3rem] after:border-r-transparent after:border-l-[1.3rem] after:border-l-transparent after:border-b-[1.6rem] after:border-black'
                >
                  <div className='overflow-auto h-full'>
                    <div className='flex justify-between items-center mb-6'>
                      <div className='text-white text-xl lg:text-3xl font-medium'>
                        {t('notifications')}
                      </div>
                      <div
                        className='underline text-white text-sm font-normal cursor-pointer'
                        onClick={markAllReadHandler}
                      >
                        {t('markAllAsRead')}
                      </div>
                    </div>

                    {userNotification?.data.length > 0 &&
                      userNotification?.data.map(
                        (notification: NotificationTypes) => {
                          return (
                            <div
                              key={notification.id}
                              className='border-notification-border border rounded border-solid flex p-4 w-full h-max hover:opacity-90 cursor-pointer mb-2 lg:mb-4'
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
                                  className={`rounded-full h-[3.75rem] object-cover w-[3.75rem] lg:w-20 lg:h-20 ${
                                    notification.has_new &&
                                    ' border-custom-green-700 border-[2px]'
                                  }`}
                                  loader={() => notification.sender.image}
                                  unoptimized={true}
                                />
                                {notification.has_new === 1 && (
                                  <div className='text-base font-normal text-custom-green-700 text-center lg:text-xl lg:hidden'>
                                    {t('new')}
                                  </div>
                                )}
                              </div>
                              <div className='ml-3 w-full lg:flex lg:flex-col lg:justify-center'>
                                <div className='lg:flex lg:justify-between'>
                                  <h2 className='text-xl font-normal text-white'>
                                    {notification.sender.name}
                                  </h2>
                                  <div className='text-base lg:text-xl font-normal text-custom-zinc-300 mt-1 hidden lg:block'>
                                    {formatDate(notification.created_at, t)}
                                  </div>
                                </div>
                                <div className='flex mt-1 lg:justify-between'>
                                  <div className='flex items-center'>
                                    {notification.has_comment ? (
                                      <Quote />
                                    ) : (
                                      <QuoteHeart />
                                    )}

                                    <div className='font-base lg:text-xl font-normal text-custom-gray-300 ml-3'>
                                      <div>
                                        {notification.has_comment
                                          ? t('commented')
                                          : t('liked')}
                                      </div>
                                    </div>
                                  </div>
                                  {notification.has_new === 1 && (
                                    <div className='text-base font-normal lg:text-xl text-custom-green-700 text-center hidden lg:block'>
                                      {t('new')}
                                    </div>
                                  )}
                                </div>
                                <div className='text-base lg:text-xl font-normal text-custom-zinc-300 mt-1 lg:hidden'>
                                  {formatDate(notification.created_at, t)}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                  </div>
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
