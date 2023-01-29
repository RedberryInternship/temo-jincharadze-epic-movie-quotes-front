import { ErrorMessage } from '@hookform/error-message';
import {
  Button,
  Close,
  DragDropFile,
  Message,
  MovieInput,
  MovieSelect,
  MovieTextArea,
  useUpdateMovie,
} from 'components';
import Image from 'next/image';
import { FormProvider } from 'react-hook-form';
import { UpdateMovieTypes } from './types';

const UpdateMovie = (props: { movieInfo: UpdateMovieTypes }) => {
  const {
    name,
    image,
    avatarLoader,
    requiredOptions,
    errors,
    register,
    form,
    budgetOption,
    yearOption,
    handleSubmitData,
    handleSubmit,
    closeModal,
    t,
  } = useUpdateMovie(props.movieInfo);

  return (
    <div className='flex justify-center'>
      <div className='text-white fixed top-0 z-[6] bg-custom-neutral-900 w-full  md:max-w-[60rem] md:mt-[7rem] overflow-y-auto md:h-[calc(100vh_-_217px)] h-screen rounded-xl'>
        <div
          className='absolute right-5 top-5 cursor-pointer'
          onClick={closeModal}
        >
          <Close />
        </div>

        <h2 className='text-center pt-9 text-xl md:text-2xl font-medium'>
          {t('movies.updateMovie')}
        </h2>
        <div className='border-b border-solid border-movie-border mt-7' />

        <div className='px-9 mt-9  pb-20'>
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
              <form onSubmit={handleSubmit(handleSubmitData)}>
                <MovieInput
                  register={register('nameEn', requiredOptions)}
                  name='nameEn'
                  type='text'
                  placeholder='Movie name'
                  language='Eng'
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='nameEn'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <MovieInput
                  register={register('nameKa', requiredOptions)}
                  containerClass='mt-1'
                  name='nameKa'
                  type='text'
                  placeholder='ფილმის სახელი'
                  language='ქარ'
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='nameKa'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>

                <MovieSelect />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='tags'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <MovieInput
                  register={register('directorEn', requiredOptions)}
                  containerClass='mt-1'
                  name='directorEn'
                  type='text'
                  placeholder='Director'
                  language='Eng'
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='directorEn'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <MovieInput
                  register={register('directorKa', requiredOptions)}
                  containerClass='mt-1'
                  name='directorKa'
                  type='text'
                  placeholder='რეჟისორი'
                  language='ქარ'
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='directorKa'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <MovieInput
                  mode='textarea'
                  options={requiredOptions}
                  containerClass='mt-1'
                  name='descriptionEn'
                  placeholder='Movie description'
                  language='Eng'
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='descriptionEn'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <MovieInput
                  mode='textarea'
                  options={requiredOptions}
                  containerClass='mt-1'
                  name='descriptionKa'
                  placeholder='ფილმის აღწერა'
                  language='ქარ'
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='descriptionKa'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <MovieInput
                  register={register('budget', budgetOption)}
                  containerClass='mt-1'
                  name='budget'
                  type='text'
                  placeholder={t('movies.budget')!}
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='budget'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <MovieInput
                  register={register('year', yearOption)}
                  containerClass='mt-1'
                  name='year'
                  type='text'
                  placeholder={t('movies.year')!}
                />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='year'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <DragDropFile />
                <div className='h-7 mt-1'>
                  <ErrorMessage
                    name='image'
                    errors={errors}
                    render={({ message }) => <Message message={message} />}
                  />
                </div>
                <Button
                  type='submit'
                  className=' bg-custom-red-600 text-center w-full py-2 rounded cursor-pointer text-xl font-normal hover:bg-custom-red-700'
                >
                  {t('movies.updateMovie')}
                </Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;
