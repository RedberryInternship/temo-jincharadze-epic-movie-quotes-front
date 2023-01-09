import { Verified } from 'components';
import { useNotificationLang } from 'hooks';

const EmailAlreadyVerified = () => {
  const { showLoginHandler, t } = useNotificationLang();
  return (
    <div className='w-[22.5rem]'>
      <div className='text-center flex flex-col items-center'>
        <Verified />
        <h2 className='text-white text-3.5 font-medium mt-10'>
          {t('email.alreadyVerified.title')}
        </h2>
      </div>
      <div className='mt-8 text-center'>
        <button
          className='bg-custom-red-600 hover:bg-custom-red-700 w-48
          md:w-full h-10 text-center rounded'
          onClick={showLoginHandler}
        >
          {t('email.alreadyVerified.btn')}
        </button>
      </div>
    </div>
  );
};

export default EmailAlreadyVerified;
