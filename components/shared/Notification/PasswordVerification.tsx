import { Button, SentIcon } from 'components';
import { useNotificationLang } from 'hooks';

const PasswordVerification = (props: { mode?: string }) => {
  const { t, closeModal } = useNotificationLang();
  return (
    <div className='w-[22.5rem]'>
      <div className='text-center flex flex-col items-center px-2 md:px-0'>
        <SentIcon />
        <h2 className='text-white text-3.5 font-medium mt-5'>
          {t('password.verification.title')}
        </h2>
        <p className='text-white font-normal mt-8 text-base text-center'>
          {t('password.verification.description')}
        </p>
      </div>
      <div className='mt-10 text-center'>
        <a href='https://mail.google.com/' target='_blank' rel='noreferrer'>
          <Button
            className={`bg-custom-red-600 hover:bg-custom-red-700 
              md:w-full h-10 text-center rounded ${
                props.mode === 'password sent' && 'w-full md:w-48'
              }`}
          >
            {t('password.verification.btn')}
          </Button>
        </a>
        <div className='text-center mt-8'>
          <div
            onClick={closeModal}
            className='cursor-pointer text-base text-custom-gray-500 font-normal'
          >
            {t('password.verification.skip')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordVerification;
