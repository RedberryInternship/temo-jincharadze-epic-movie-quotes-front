import { SentIcon } from 'components';
import { useNotificationLang } from 'hooks';

const EmailVerification = () => {
  const { t } = useNotificationLang();
  return (
    <div className='w-[22.5rem]'>
      <div className='text-center flex flex-col items-center'>
        <SentIcon />
        <h2 className='text-white text-3.5 font-medium mt-4'>
          {t('email.emailVerification.title')}
        </h2>
        <p className='text-white font-normal mt-6 text-base text-center'>
          {t('email.emailVerification.description')}
        </p>
      </div>
      <div className='mt-6 text-center'>
        <a href='https://mail.google.com/' target='_blank'>
          <button
            className='bg-custom-red-600 hover:bg-custom-red-700 w-48
            md:w-full h-10 text-center rounded'
          >
            {t('email.emailVerification.btn')}
          </button>
        </a>
      </div>
    </div>
  );
};

export default EmailVerification;
