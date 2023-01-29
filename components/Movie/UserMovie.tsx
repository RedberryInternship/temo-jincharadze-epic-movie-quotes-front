import {
  AddMovie,
  Dashboard,
  Pen,
  Trash,
  UpdateMovie,
  AddNewQuote,
  Comment,
  Heart,
  Dots,
  Eye,
  ViewQuote,
  EditQuote,
} from 'components';
import useSelectedMovie from 'hooks/useSelectedMovie';
import Image from 'next/image';
import { Tags } from 'types';
import Link from 'next/link';
import { formatNumber } from 'helper';

const UserMovie = () => {
  const {
    data,
    i18n,
    query,
    openModal,
    modalForm,
    closeModal,
    handleMovieDelete,
    openQuoteAddModal,
    quoteMenu,
    selectedQuote,
    selectedQuoteHandler,
    handleQuoteDelete,
    userId,
    refEl,
    likeToggleHandler,
    getQuote,
    t,
  } = useSelectedMovie();

  return (
    <>
      {modalForm.isOpen && modalForm.value === 'update movie' && data?.data && (
        <>
          <Link
            onClick={closeModal}
            href={`/movie-list/${query.movieId}`}
            className='fixed top-0 left-0 w-[calc(100%_-_80px)] h-screen z-[5]'
          />
          <UpdateMovie movieInfo={data} />
        </>
      )}

      {modalForm.isOpen && modalForm.value === 'add quote' && data?.data && (
        <>
          <Link
            onClick={closeModal}
            href={`/movie-list/${query.movieId}`}
            className='fixed top-0 left-0 w-full h-screen z-[5]'
          />
          <AddNewQuote quoteInfo={data} />
        </>
      )}

      {query.show === 'view-quote' && data?.data && (
        <>
          <Link
            onClick={closeModal}
            href={`/movie-list/${query.movieId}`}
            className='fixed top-0 left-0 w-full h-screen z-[5] bg-dashboard-color opacity-60'
          />
          <ViewQuote quoteInfo={data} />
        </>
      )}

      {query.show === 'edit-quote' && getQuote?.data.id && query.id && (
        <>
          <Link
            onClick={closeModal}
            href={`/movie-list/${query.movieId}`}
            className='fixed top-0 left-0 w-full h-screen z-[5] bg-dashboard-color opacity-60'
          />
          <EditQuote singleQuote={getQuote} />
        </>
      )}

      <Dashboard>
        <div className='mt-8 px-10 relative'>
          {modalForm.isOpen && (
            <Link href={`/movie-list/${query.movieId}`}>
              <div className='absolute w-[calc(100%_-_80px)] z-[3] h-screen bg-dashboard-color opacity-60' />
            </Link>
          )}
          <h2 className='text-2xl font-medium text-white hidden md:flex mb-8'>
            {t('movies.movieDescription')}
          </h2>
          <div className='w-full'>
            {data && (
              <div className='text-white w-full flex flex-col justify-between'>
                <div className='xm:flex'>
                  <Image
                    width={809}
                    height={441}
                    src={data.data.image}
                    loader={() => data.data.image}
                    alt='image'
                    className='rounded-xl xm:h-[27.5rem] h-[19rem] w-full xm:max-w-[50.5rem] object-cover'
                    unoptimized={true}
                  />

                  <div className='xm:ml-6 w-full xm:w-[50rem]'>
                    <h1 className='text-2xl font-medium text-custom-orange-200 mt-6 break-all xm:mt-0 flex items-center justify-between flex-wrap'>
                      <div className=' pr-4'>
                        {i18n.language === 'ka'
                          ? data.data.name?.ka
                          : data.data.name?.en}
                        <span className='ml-2'>({data.data.year})</span>
                      </div>
                      <div className='flex bg-zinc-800 py-3 px-7 rounded-xl items-center'>
                        <span onClick={openModal} className='cursor-pointer'>
                          <Pen />
                        </span>

                        <div className='border-l-[2px] border-custom-gray-500 h-4 mx-6' />
                        <span
                          onClick={handleMovieDelete}
                          className='cursor-pointer'
                        >
                          <Trash />
                        </span>
                      </div>
                    </h1>
                    <div className='mt-8 flex flex-wrap break-all'>
                      {data.data.tag?.map((genre: Tags) => {
                        return (
                          <div key={genre.id}>
                            <span className='bg-custom-gray-500 w-max px-3 h-7 break-all flex items-center justify-center mt-1 rounded-sm text-sm lg:text-base lg:font-bold font-normal text-white mr-2'>
                              {i18n.language === 'ka'
                                ? genre.name.ka
                                : genre.name.en}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div className='mt-5 flex'>
                      <div>
                        <p className='text-custom-gray-300 font-bold text-lg mb-5 break-all'>
                          {t('movies.director')}:
                        </p>
                        <p className='text-custom-gray-300 font-bold text-lg break-all'>
                          {t('movies.budget')}:
                        </p>
                      </div>
                      <div>
                        <p className='ml-3 text-lg text-white font-medium mb-5 break-all'>
                          {i18n.language === 'ka'
                            ? data.data.director?.ka
                            : data.data.director?.en}
                        </p>
                        <p className='ml-3 text-lg text-white font-medium break-all'>
                          {`${formatNumber(data.data.budget)}$`}
                        </p>
                      </div>
                    </div>
                    <div className='mt-5 text-custom-gray-300 lg:text-lg font-normal'>
                      <p className='break-all'>
                        {i18n.language === 'ka'
                          ? data.data.description?.ka
                          : data.data.description?.en}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-8 cursor-pointer xm:flex xm:items-center'>
                  <div className='hidden xm:flex xm:items-center w-max'>
                    <h2 className='text-2xl text-white font-normal'>
                      {t('quotes.quotes')}
                    </h2>
                    <div className='text-2xl text-white font-normal ml-2'>
                      ({t('quotes.total')} {data.data.quotes.length})
                    </div>
                    <div className='border-r border-custom-gray-500 border-solid h-6 mx-4' />
                  </div>

                  <div
                    className='bg-custom-red-600 hover:bg-custom-red-700 flex items-center justify-center rounded w-32 md:w-[9.6rem] h-10 md:h-12'
                    onClick={openQuoteAddModal}
                  >
                    <AddMovie />
                    <p
                      className={`text-white font-normal text-base md:text-xl ml-2 ${
                        i18n.language === 'ka' && 'text-xs md:text-base'
                      }`}
                    >
                      {t('quotes.addQuote')}
                    </p>
                  </div>
                </div>

                <div className='mt-10 xm:hidden'>
                  {modalForm.isOpen && (
                    <Link href={`/movie-list/${query.movieId}`}>
                      <div className='absolute w-[calc(100%_-_80px)] z-[3] h-screen bg-dashboard-color opacity-60' />
                    </Link>
                  )}
                  <div className='border-b border-solid bg-custom-zinc-600 xm:hidden' />
                  <div className='mt-10'>
                    <h2 className='text-2xl text-white font-normal'>
                      {t('quotes.allQuotes')}
                    </h2>
                    <div className='text-base text-white font-normal mt-2'>
                      ({t('quotes.total')} {data.data.quotes.length})
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {data?.data.quotes.map(
          (quote: {
            id: number | string;
            image: string;
            text: { ka: string; en: string };
            comments: [];
            likes: [] | (string & { map: Function });
          }) => {
            return (
              <div key={quote.id} className='md:px-10 w-full'>
                {modalForm.isOpen && (
                  <Link href={`/movie-list/${query.movieId}`}>
                    <div className='absolute w-calc[(100%_-_80px)] z-[3] h-screen bg-dashboard-color opacity-60' />
                  </Link>
                )}
                <div className='mt-9 bg-custom-neutral-900 py-5 px-9 lg:px-8 mb-9 w-full xm:max-w-[50.5rem] lg:relative md:rounded-xl'>
                  <div
                    className='lg:absolute right-9 top-8 hidden lg:block'
                    onClick={() => selectedQuoteHandler(quote.id.toString())}
                  >
                    <div className='cursor-pointer'>
                      <Dots />
                    </div>
                  </div>
                  <div className='lg:flex lg:items-center'>
                    <div className=''>
                      <Image
                        width={358}
                        height={302}
                        src={quote.image}
                        loader={() => quote.image}
                        alt='image'
                        className='rounded-xl object-cover w-full lg:w-[14.1rem] h-[8.7rem]'
                        unoptimized={true}
                      />
                    </div>
                    <h1 className='italic font-normal text-2xl text-custom-gray-300 mt-6 break-all lg:ml-9 lg:mt-0'>
                      {`"${
                        i18n.language === 'ka' ? quote.text.ka : quote.text.en
                      }"`}
                    </h1>
                  </div>
                  <div className='border-b border-solid border-movie-border mt-6' />
                  <div className='flex mt-4 items-center justify-between w-full relative'>
                    <div>
                      <div className='flex flex-wrap'>
                        <div className='flex items-center mr-6 cursor-pointer'>
                          <span className='text-white text-xl font-normal mr-3 break-all'>
                            {quote.comments.length}
                          </span>
                          <Comment />
                        </div>
                        <div className='flex items-center'>
                          <span className='text-white text-xl font-normal mr-3 break-all'>
                            {quote.likes ? quote.likes.length : 0}
                          </span>
                          <div
                            onClick={() =>
                              likeToggleHandler(quote.id.toString()!)
                            }
                            className='cursor-pointer'
                          >
                            <Heart
                              color={
                                !quote.likes.length
                                  ? '#fff'
                                  : quote.likes.map(
                                      (like: { user_id: string }) =>
                                        like.user_id === userId
                                          ? '#F3426C'
                                          : '#fff'
                                    )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className='lg:hidden'
                      onClick={() => selectedQuoteHandler(quote.id.toString())}
                    >
                      <div className='cursor-pointer'>
                        <Dots />
                      </div>
                    </div>
                    {quoteMenu && selectedQuote == quote.id && (
                      <div
                        ref={refEl}
                        className='bg-zinc-800 py-8 pl-10 absolute bottom-0 pr-[6.5rem] rounded-xl right-0 xm:-right-56 xm:-bottom-5'
                      >
                        <Link
                          href={`/movie-list/${query.movieId}?show=view-quote&id=${selectedQuote}`}
                        >
                          <div className='flex items-center cursor-pointer hover:opacity-70'>
                            <Eye color='#FFFFFF' width='20' height='13.75' />
                            <span className='text-white text-base font-normal ml-4'>
                              {t('quotes.viewQuote')}
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={`/movie-list/${query.movieId}?show=edit-quote&id=${selectedQuote}`}
                        >
                          <div className='flex items-center mt-8 cursor-pointer hover:opacity-70'>
                            <Pen />
                            <span className='text-white text-base font-normal ml-4'>
                              {t('quotes.editPost')}
                            </span>
                          </div>
                        </Link>
                        <div
                          className='flex items-center mt-8 cursor-pointer hover:opacity-70'
                          onClick={handleQuoteDelete}
                        >
                          <Trash />
                          <span className='text-white text-base font-normal ml-4'>
                            {t('quotes.delete')}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
        <div className='pb-10' />
      </Dashboard>
    </>
  );
};

export default UserMovie;
