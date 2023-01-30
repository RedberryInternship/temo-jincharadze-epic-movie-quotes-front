import { Dashboard, Heart, Comment, CommentInput } from 'components';
import { QuoteCommentType } from 'components/Quote/types';
import { useNewsFeed } from 'hooks';
import Image from 'next/image';
import { FormProvider } from 'react-hook-form';
import { NewsFeedQuoteTypes } from './types';

const AllQuotes = () => {
  const {
    quotesData,
    i18n,
    name,
    image,
    avatarLoader,
    id,
    t,
    handleSubmit,
    form,
    commentHandler,
    likeToggleHandler,
  } = useNewsFeed();

  return (
    <Dashboard>
      {quotesData?.data && (
        <div className='mt-7'>
          {quotesData.data.map((quote: NewsFeedQuoteTypes) => {
            return (
              <div key={quote.id} className='bg-black mb-8 px-10 py-7'>
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
                  <h2 className='text-white ml-4 font-normal text-base'>
                    {quote.movie.user.name}
                  </h2>
                </div>

                <div className='my-4 flex break-all'>
                  <p className='text-white font-normal text-base'>
                    {`"${
                      i18n.language === 'ka' ? quote.text.ka : quote.text.en
                    }"`}
                  </p>
                  <span className='text-white px-1'>-</span>
                  <p>
                    <span className='text-custom-orange-200 font-medium text-base'>
                      {`${
                        i18n.language === 'ka'
                          ? quote.movie.name.ka
                          : quote.movie.name.en
                      }.`}
                    </span>
                    <span className='text-white font-normal text-base ml-1'>{`(${quote.movie.year})`}</span>
                  </p>
                </div>

                <div>
                  <Image
                    src={quote.movie.image}
                    loader={() => quote.movie.image}
                    alt='quote image'
                    className='rounded-xl'
                    width={358}
                    height={302}
                    unoptimized={true}
                  />
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
                                : quote.likes.map((like: { user_id: string }) =>
                                    like.user_id === id ? '#F3426C' : '#fff'
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
                    <FormProvider {...form}>
                      <form
                        className='w-full'
                        onSubmit={handleSubmit(() =>
                          commentHandler(quote.id.toString()!)
                        )}
                      >
                        <CommentInput
                          name='comment'
                          type='text'
                          containerClass='ml-3'
                          placeholder={t('quotes.writeComment')}
                        />
                      </form>
                    </FormProvider>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Dashboard>
  );
};

export default AllQuotes;
