import { Button, SentIcon } from 'components';
import { useNotificationLang } from 'hooks';

const PasswordVerification = () => {
  const { t, closeModal } = useNotificationLang();
  return (
    <div className='w-[22.5rem]'>
      <div className='text-center flex flex-col items-center'>
        <SentIcon />
        <h2 className='text-white text-3.5 font-medium mt-5'>
          {t('password.verification.title')}
        </h2>
        <p className='text-white font-normal mt-8 text-base text-center'>
          {t('password.verification.description')}
        </p>
      </div>
      <div className='mt-10 text-center'>
        <a href='https://mail.google.com/' target='_blank'>
          <Button
            className='bg-custom-red-600 hover:bg-custom-red-700 w-48
              md:w-full h-10 text-center rounded'
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
