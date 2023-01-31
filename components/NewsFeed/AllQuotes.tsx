import { Dashboard, Heart, Comment, CommentInput } from 'components';
import { QuoteCommentType } from 'components/Quote/types';
import { useNewsFeed } from 'hooks';
import Image from 'next/image';
import { NewsFeedQuoteTypes } from './types';
import InfiniteScroll from 'react-infinite-scroll-component';

const AllQuotes = () => {
  const {
    quotesData,
    i18n,
    image,
    avatarLoader,
    id,
    t,
    likeToggleHandler,
    fetchNextPage,
    hasNextPage,
    isSuccess,
  } = useNewsFeed();

  return (
    <Dashboard>
      {quotesData && isSuccess && (
        <div className='mt-7 md:px-10 md:flex items-center w-full flex-col'>
          <InfiniteScroll
            hasMore={hasNextPage!}
            next={fetchNextPage}
            loader
            dataLength={quotesData.pages.length * 3}
          >
            {quotesData?.pages.map((page) =>
              page.data.data.map((quote: NewsFeedQuoteTypes) => {
                return (
                  <div
                    key={quote.id}
                    className='bg-black mb-8 md:mb-10 px-9 py-7  md:rounded-xl md:max-w-[938px]'
                  >
                    <div className='flex items-center'>
                      <Image
                        src={quote.movie.user.image}
                        loader={() => quote.movie.user.image}
                        width={40}
                        height={40}
                        alt='avatar'
                        className='rounded-full'
                        unoptimized={true}
                      />
                      <h2 className='text-white ml-4 font-normal text-base md:text-xl'>
                        {quote.movie.user.name}
                      </h2>
                    </div>
                    <div className='my-4 flex break-all flex-wrap'>
                      <p className='text-white font-normal text-base md:text-xl'>
                        {`"${
                          i18n.language === 'ka' ? quote.text.ka : quote.text.en
                        }"`}
                      </p>
                      <span className='text-white px-1'>-</span>
                      <p>
                        <span className='text-custom-orange-200 font-medium text-base md:text-xl'>
                          {`${
                            i18n.language === 'ka'
                              ? quote.movie.name.ka
                              : quote.movie.name.en
                          }.`}
                        </span>
                        <span className='text-white font-normal text-base md:text-xl ml-1'>{`(${quote.movie.year})`}</span>
                      </p>
                    </div>

                    <div>
                      <div className='grid grid-cols-3 mt-8'>
                        <Image
                          src={quote.movie.image}
                          loader={() => quote.movie.image}
                          alt='quote image'
                          className='rounded-xl w-full h-full object-cover col-span-3'
                          width={358}
                          height={302}
                          unoptimized={true}
                        />
                      </div>
                      <div className='mt-5'>
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
                              className='cursor-pointer'
                              onClick={() =>
                                likeToggleHandler(quote.id.toString()!)
                              }
                            >
                              <Heart
                                color={
                                  !quote.likes.length
                                    ? '#fff'
                                    : quote.likes.map(
                                        (like: { user_id: string }) =>
                                          like.user_id === id
                                            ? '#F3426C'
                                            : '#fff'
                                      )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {quote.comments &&
                        quote.comments.map((comment: QuoteCommentType) => {
                          return (
                            <div key={comment.id} className='w-full mt-4'>
                              <div className='border-b border-solid border-movie-border mb-4' />
                              <div className='flex items-center'>
                                <Image
                                  src={comment.user.image}
                                  className='rounded-full object-cover'
                                  alt='user image'
                                  width={40}
                                  height={40}
                                  loader={() => comment.user.image}
                                  unoptimized={true}
                                />
                                <div className='text-white ml-4 text-base md:text-xl font-medium break-all'>
                                  {comment.user.name}
                                </div>
                              </div>
                              <p className='font-normal text-base md:text-xl mt-3 break-all text-white'>
                                {comment.comment}
                              </p>
                            </div>
                          );
                        })}

                      <div className='border-b border-solid border-movie-border mt-6' />
                      <div className='mt-4 flex'>
                        {image && (
                          <Image
                            src={image}
                            className='rounded-full object-cover'
                            alt='user image'
                            width={40}
                            height={40}
                            loader={avatarLoader}
                            unoptimized={true}
                          />
                        )}
                        <CommentInput
                          name='comment'
                          quoteId={quote.id.toString()!}
                          type='text'
                          containerClass='ml-3 w-full'
                          placeholder={t('quotes.writeComment')}
                        />
                        =
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </InfiniteScroll>
        </div>
      )}
    </Dashboard>
  );
};

export default AllQuotes;
