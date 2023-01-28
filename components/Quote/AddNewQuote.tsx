import { ErrorMessage } from '@hookform/error-message';
import {
  Button,
  Close,
  DragDropFile,
  Message,
  MovieTextArea,
  useAddNewQuote,
} from 'components';
import Image from 'next/image';
import { FormProvider } from 'react-hook-form';
import { Tags } from 'types';
import { AddNewQuoteTypes } from './types';

const AddNewQuote = (props: { quoteInfo: AddNewQuoteTypes }) => {
  const {
    name,
    image,
    avatarLoader,
    quoteEnOptions,
    quoteKaOptions,
    errors,
    register,
    form,
    handleQuoteSubmit,
    handleSubmit,
    closeModal,
    i18n,
    t,
  } = useAddNewQuote(props.quoteInfo);

  console.log(typeof props.quoteInfo.data.image);

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
          {t('quotes.addQuote')}
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

          <div className='grid grid-cols-3 mt-8 bg-black md:bg-transparent rounded py-4 pl-2'>
            <Image
              width={358}
              height={302}
              src={props.quoteInfo.data.image}
              loader={() => props.quoteInfo.data.image}
              alt='image'
              className='rounded-xl object-cover col-span-1 h-full'
              unoptimized={true}
            />
            <div className='ml-3 md:ml-7 min-w-[8rem] col-span-2  md:flex md:flex-col md:justify-center'>
              <h1 className='font-normal text-custom-orange-200 break-all flex items-center justify-between flex-wrap mt-2 text-base md:text-2xl md:font-medium'>
                <div>
                  {i18n.language === 'ka'
                    ? props.quoteInfo.data.name.ka
                    : props.quoteInfo.data.name.en}
                  <span className='ml-2'>({props.quoteInfo.data.year})</span>
                </div>
              </h1>
              <div className='mt-1 flex'>
                <div>
                  <p className='text-custom-gray-300 font-bold text-base break-all md:text-lg'>
                    {t('movies.director')}:
                  </p>
                </div>
                <div>
                  <p className='ml-3 text-base text-white font-medium break-all md:text-lg'>
                    {i18n.language === 'ka'
                      ? props.quoteInfo.data.director.ka
                      : props.quoteInfo.data.director.en}
                  </p>
                </div>
              </div>
              <div className='mt-1 flex flex-wrap break-all'>
                {props.quoteInfo.data.tag.map((genre: Tags) => {
                  return (
                    <div key={genre.id}>
                      <span className='bg-custom-gray-500 w-max px-2 md:px-3 h-5 md:h-8 break-all  flex items-center justify-center mt-1 rounded text-xs md:text-lg font-bold text-white mr-1'>
                        {i18n.language === 'ka' ? genre.name.ka : genre.name.en}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <FormProvider {...form}>
              <form onSubmit={handleSubmit(handleQuoteSubmit)}>
                <div className='md:hidden'>
                  <DragDropFile />

                  <div className='h-7 mt-1'>
                    <ErrorMessage
                      name='image'
                      errors={errors}
                      render={({ message }) => <Message message={message} />}
                    />
                  </div>
                </div>

                <MovieTextArea
                  register={register('quoteEn', quoteEnOptions)}
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
                <MovieTextArea
                  register={register('quoteKa', quoteKaOptions)}
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

                <div className='hidden md:block'>
                  <DragDropFile />
                  <div className='h-7 mt-1'>
                    <ErrorMessage
                      name='image'
                      errors={errors}
                      render={({ message }) => <Message message={message} />}
                    />
                  </div>
                </div>

                <Button
                  type='submit'
                  className=' bg-custom-red-600 text-center w-full py-2 rounded cursor-pointer text-xl font-normal hover:bg-custom-red-700'
                >
                  {t('quotes.addQuote')}
                </Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewQuote;
