import { ErrorMessage } from '@hookform/error-message';
import {
  Button,
  Close,
  DragDropFile,
  Message,
  MovieTextArea,
  Trash,
  useEditQuote,
} from 'components';
import Image from 'next/image';
import { FormProvider } from 'react-hook-form';
import { AddNewQuoteTypes } from './types';

const EditQuote = (props: { singleQuote: AddNewQuoteTypes }) => {
  const {
    register,
    handleSubmit,
    handleQuoteUpadate,
    quoteKaOptions,
    quoteEnOptions,
    closeModal,
    errors,
    name,
    image,
    avatarLoader,
    form,
    handleQuoteDelete,
    t,
  } = useEditQuote(props.singleQuote);

  return (
    <div className='flex justify-center'>
      <div className='text-white fixed top-0 z-[6] bg-custom-neutral-900 w-full  md:max-w-[60rem] md:mt-[7rem] overflow-y-auto md:h-[calc(100vh_-_217px)] h-screen rounded-xl'>
        <div onClick={closeModal}>
          <div className='absolute right-11 top-11 cursor-pointer'>
            <Close />
          </div>
        </div>
        <div className='hidden md:block absolute left-1/2 -translate-x-1/2'>
          <h2 className='text-center pt-9 text-xl md:text-2xl font-medium'>
            {t('quotes.editQuote')}
          </h2>
        </div>
        <div className='flex items-center pt-11 pl-8'>
          <div
            className='flex items-center cursor-pointer hover:opacity-70'
            onClick={handleQuoteDelete}
          >
            <Trash />
          </div>
        </div>
        <div className='border-b border-solid border-movie-border mt-7' />

        <div className='px-9 mt-9 pb-20 md:pb-8'>
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

          <>
            <div>
              <FormProvider {...form}>
                <form onSubmit={handleSubmit(handleQuoteUpadate)}>
                  <div className='mt-11'>
                    <MovieTextArea
                      name='quoteEn'
                      register={register('quoteEn', quoteEnOptions)}
                      textAreaClass='placeholder-custom-gray-300 italic md:text-2xl'
                      type='text'
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
                      name='quoteKa'
                      register={register('quoteKa', quoteKaOptions)}
                      textAreaClass='placeholder-custom-gray-300 italic md:text-2xl'
                      containerClass='mt-4'
                      type='text'
                      language='ქარ'
                    />
                  </div>

                  <div>
                    <DragDropFile mode='quote' />
                  </div>

                  <Button
                    type='submit'
                    className=' bg-custom-red-600 text-center w-full py-2 rounded cursor-pointer text-xl font-normal hover:bg-custom-red-700 mt-10'
                  >
                    {t('quotes.addQuote')}
                  </Button>
                </form>
              </FormProvider>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default EditQuote;
