import { Photo } from 'components';
import Image from 'next/image';
import useDragDropFile from './useDragDropFile';

const DragDropFile = (props: { mode?: string }) => {
  const {
    preview,
    onDragEnter,
    onDragLeave,
    onDrop,
    onFileDrop,
    wrapperRef,
    getValues,
    image,
    t,
  } = useDragDropFile();

  return (
    <>
      <div
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        ref={wrapperRef}
        className={`w-full h-[5.1rem] flex bg-transparent border-custom-gray-500 rounded border relative  ${
          props.mode === 'quote' && 'hidden'
        }`}
      >
        <div className='flex items-center justify-between px-4 w-full'>
          <div className='flex max-w-[calc(100%_-_140px)]'>
            <Photo />
            <div className='text-base font-normal text-white ml-3 truncate'>
              {getValues('image').name ? (
                getValues('image').name
              ) : (
                <div>
                  <span className='md:hidden'>{t('movies.uploadImage')}</span>
                  <span className='hidden md:flex'>{t('movies.dragDrop')}</span>
                </div>
              )}
            </div>
          </div>

          <div className='rounded bg-file-color p-[0.62rem] cursor-pointer hover:bg-purple-800 ml-6'>
            <span>{t('movies.chooseFile')}</span>
            <input
              onChange={onFileDrop}
              name='image'
              type='file'
              accept='image/*'
              className=' opacity-0 absolute top-0 left-0 w-full h-full'
            />
          </div>
        </div>
      </div>
      {preview && (
        <div className='w-full md:h-[32rem] mt-6 relative'>
          <div
            className={`rounded-xl absolute flex left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-4 pt-5 pb-4 flex-col items-center bg-top-gradient opacity-80 cursor-pointer ${
              !props.mode && 'hidden'
            }`}
          >
            <Photo />
            <span className='text-base font-normal mt-3'>
              {t('quotes.changePhoto')!}
            </span>
            <input
              onChange={onFileDrop}
              name='image'
              type='file'
              accept='image/*'
              className=' opacity-0 absolute top-0 left-0 w-full h-full'
            />
          </div>
          <Image
            loader={() => image}
            src={
              typeof getValues('image') === 'string'
                ? getValues('image')
                : preview
            }
            alt='img'
            unoptimized={true}
            width={358}
            height={302}
            className='rounded-[0.6rem] object-cover w-full h-[19rem] lg:h-[31rem]'
          />
        </div>
      )}

      {typeof getValues('image') === 'string' && getValues('image') && (
        <div className='w-full md:h-[32rem] mt-6 relative'>
          <div
            className={`rounded-xl absolute flex left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-4 pt-5 pb-4 flex-col items-center bg-top-gradient opacity-80 cursor-pointer ${
              !props.mode && 'hidden'
            }`}
          >
            <Photo />
            <span className='text-base font-normal mt-3'>
              {t('quotes.changePhoto')!}
            </span>
            <input
              onChange={onFileDrop}
              name='image'
              type='file'
              accept='image/*'
              className=' opacity-0 absolute top-0 left-0 w-full h-full'
            />
          </div>
          <Image
            loader={() => getValues('image')}
            src={getValues('image')}
            alt='img'
            unoptimized={true}
            width={358}
            height={302}
            className='rounded-[0.6rem] object-cover w-full h-[19rem] lg:h-[31rem]'
          />
        </div>
      )}
    </>
  );
};

export default DragDropFile;
