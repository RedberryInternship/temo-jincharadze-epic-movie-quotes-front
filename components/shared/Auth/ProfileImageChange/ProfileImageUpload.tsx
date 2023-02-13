import { useProfileImageUpload } from 'components';
import Image from 'next/image';

const ProfileImageUpload = () => {
  const { onFileDrop, preview, avatar, image, t } = useProfileImageUpload();

  return (
    <>
      <div className='w-full mt-6 relative h-[11.75rem]'>
        <div className='rounded-xl'>
          {!preview && typeof avatar === 'string' && (
            <>
              <input
                onChange={onFileDrop}
                name='image'
                type='file'
                accept='image/*'
                className='opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer'
              />
              {image && (
                <Image
                  loader={() => image}
                  src={image}
                  alt='img'
                  unoptimized={true}
                  width={188}
                  height={188}
                  className='rounded-full object-cover h-[11.75rem]'
                />
              )}
            </>
          )}
          {preview && avatar.name && (
            <>
              <input
                onChange={onFileDrop}
                name='image'
                type='file'
                accept='image/*'
                className=' opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer'
              />
              <Image
                loader={() => avatar.toString()!}
                src={typeof avatar === 'string' ? avatar : preview}
                alt='img'
                unoptimized={true}
                width={188}
                height={188}
                className='rounded-full object-cover h-[11.75rem]'
              />
            </>
          )}
        </div>
        <div className='text-xl font-normal w-full bottom-0 relative text-center text-white mt-2'>
          <input
            onChange={onFileDrop}
            name='image'
            type='file'
            accept='image/*'
            className='opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer'
            id='file_input'
          />
          <label htmlFor='file_input' className='relative z-[2] cursor-pointer'>
            {t('profile.uploadNewPhoto')}
          </label>
        </div>
      </div>
    </>
  );
};

export default ProfileImageUpload;
