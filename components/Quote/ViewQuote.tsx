import {
  Close,
  Comment,
  Heart,
  CommentInput,
  Pen,
  Trash,
  ViewQuoteInput,
} from 'components';
import Image from 'next/image';
import Link from 'next/link';
import { AddNewQuoteTypes, QuoteCommentType, ViewQuote } from './types';
import useViewQuote from './useViewQuote';

const ViewQuote = (props: { quoteInfo: AddNewQuoteTypes }) => {
  const {
    name,
    image,
    avatarLoader,
    query,
    filteredQuote,
    likeToggleHandler,
    handleQuoteDelete,
    id,
    t,
  } = useViewQuote(props.quoteInfo);

  return (
    <div className='flex justify-center'>
      <div className='text-white fixed top-0 z-[6] bg-custom-neutral-900 w-full  md:max-w-[60rem] md:mt-[7rem] overflow-y-auto md:h-[calc(100vh_-_217px)] h-screen rounded-xl'>
        <Link href={`/movie-list/${query.movieId}`}>
          <div className='absolute right-11 top-11 cursor-pointer'>
            <Close />
          </div>
        </Link>
        <div className='hidden md:block absolute left-1/2 -translate-x-1/2'>
          <h2 className='text-center pt-9 text-xl md:text-2xl font-medium'>
            {t('quotes.viewQuote')}
          </h2>
        </div>
        <div className='flex items-center pt-11 pl-8'>
          <Link
            href={`/movie-list/${query.movieId}?show=edit-quote&id=${query.id}`}
          >
            <div className='flex items-center cursor-pointer hover:opacity-70'>
              <Pen />
            </div>
          </Link>
          <div className='border-l-[2px] border-custom-gray-500 h-4 mx-6' />

          <div
            className='flex items-center cursor-pointer hover:opacity-70'
            onClick={handleQuoteDelete}
          >
            <Trash />
          </div>
        </div>
        <div className='border-b border-solid border-movie-border mt-7' />

        <div className='px-9 mt-9 pb-20 md:pb-8'>
          <div className='flex items-center'>
            <div>
              {image && (
                <Image
                  src={image}
                  className='rounded-full object-cover md:w-14 md:h-14 w-10 h-10'
                  alt='user image'
                  width={40}
                  height={40}
                  loader={avatarLoader}
                  unoptimized={true}
                />
              )}
            </div>
            <div className='ml-4'>
              <h2 className='text-xl font-normal text-white'>{name}</h2>
            </div>
          </div>

          <>
            {filteredQuote &&
              filteredQuote.map((quote: ViewQuote) => {
                return (
                  <div key={quote.id}>
                    <div className='mt-11'>
                      <ViewQuoteInput
                        textAreaClass='placeholder-custom-gray-300 italic md:text-2xl'
                        type='text'
                        language='Eng'
                        disabled={true}
                        placeholder={`"${quote.text.en}"`}
                      />
                      <ViewQuoteInput
                        textAreaClass='placeholder-custom-gray-300 italic md:text-2xl'
                        disabled={true}
                        containerClass='mt-4'
                        type='text'
                        language='ქარ'
                        placeholder={`"${quote.text.ka}"`}
                      />
                    </div>

                    <div className='grid grid-cols-3 mt-8 rounded'>
                      <Image
                        width={358}
                        height={302}
                        src={quote.image}
                        loader={() => quote.image}
                        alt='image'
                        className='rounded-xl object-cover col-span-3  w-full h-[19rem] lg:h-[31rem]'
                        unoptimized={true}
                      />
                    </div>
                    <div className='mt-7'>
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
                            onClick={likeToggleHandler}
                            className='cursor-pointer'
                          >
                            <Heart
                              color={
                                !quote.likes.length
                                  ? '#fff'
                                  : quote.likes.find(
                                      (like: { user_id: string }) =>
                                        like.user_id === id
                                    )
                                  ? '#F3426C'
                                  : '#fff'
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
                                className='rounded-full object-cover w-10 h-10  md:w-14 md:h-14'
                                alt='user image'
                                width={40}
                                height={40}
                                loader={() => comment.user.image}
                                unoptimized={true}
                              />
                              <div className='text-white  ml-4 text-base md:text-xl font-medium break-all'>
                                {comment.user.name}
                              </div>
                            </div>
                            <p className='font-normal text-base md:text-xl mt-3 break-all w-max ml-[3.5rem] md:ml-[4.5rem]'>
                              {comment.comment}
                            </p>
                          </div>
                        );
                      })}
                    <div className='border-b border-solid border-movie-border mt-6' />
                    <div className='mt-4 flex items-center'>
                      {image && (
                        <Image
                          src={image}
                          className='rounded-full object-cover w-10 h-10 md:w-14 md:h-14'
                          alt='user image'
                          width={40}
                          height={40}
                          loader={avatarLoader}
                          unoptimized={true}
                        />
                      )}

                      <CommentInput
                        quoteId={query.id?.toString()!}
                        name='comment'
                        type='text'
                        containerClass='ml-3 w-full'
                        placeholder={t('quotes.writeComment')}
                      />
                    </div>
                  </div>
                );
              })}
          </>
        </div>
      </div>
    </div>
  );
};

export default ViewQuote;
