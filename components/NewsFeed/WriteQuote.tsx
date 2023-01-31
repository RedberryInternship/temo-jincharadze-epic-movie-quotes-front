import { ErrorMessage } from '@hookform/error-message';
import {
  Button,
  Close,
  DragDropFile,
  Message,
  MovieDropDown,
  MovieInput,
  useWriteQuote,
} from 'components';
import Image from 'next/image';
import { FormProvider } from 'react-hook-form';

const WriteQuote = () => {
  const {
    name,
    image,
    avatarLoader,
    quoteEnOptions,
    quoteKaOptions,
    errors,
    form,
    handleQuoteSubmit,
    handleSubmit,
    closeModal,
    t,
  } = useWriteQuote();

  return (
    <div className='flex justify-center'>
      <div className='text-white fixed top-0 z-[6] bg-custom-neutral-900 w-full  md:max-w-[60rem] md:mt-[7rem] overflow-y-auto md:h-[calc(100vh_-_217px)] h-screen rounded-xl'>
        <div
          className='absolute right-11 top-11 cursor-pointer'
          onClick={closeModal}
        >
          <Close />
        </div>
        <h2 className='text-center pt-9 text-xl md:text-2xl font-medium'>
          {t('quotes.writeNewQuote')}
        </h2>
        <div className='border-b border-solid border-movie-border mt-7' />

        <div className='px-9 mt-9 pb-20'>
          <div className='flex items-center hover:opacity-80'>
            <div>
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
            </div>
            <div className='ml-4'>
              <h2 className='text-xl font-normal text-white'>{name}</h2>
            </div>
          </div>

          <div className='mt-8'>
            <FormProvider {...form}>
              <form onSubmit={handleSubmit(handleQuoteSubmit)}>
                <MovieInput
                  mode='textarea'
                  options={quoteEnOptions}
                  name='quoteEn'
                  type='text'
                  placeholder='Start create new quote'
                  language='Eng'
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='quoteEn'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <MovieInput
                  mode='textarea'
                  options={quoteKaOptions}
                  name='quoteKa'
                  type='text'
                  placeholder='ახალი ციტატა'
                  language='ქარ'
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='quoteKa'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>

                <div>
                  <DragDropFile />
                  <div className='h-7 mt-1'>
                    <ErrorMessage
                      name='image'
                      errors={errors}
                      render={({ message }) => <Message message={message} />}
                    />
                  </div>
                </div>

                <div>
                  <MovieDropDown />
                </div>

                <Button
                  type='submit'
                  className=' bg-custom-red-600 text-center w-full py-2 rounded cursor-pointer text-xl font-normal hover:bg-custom-red-700'
                >
                  {t('quotes.post')}
                </Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteQuote;
