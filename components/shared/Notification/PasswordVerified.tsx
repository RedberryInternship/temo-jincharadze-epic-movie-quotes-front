import { Verified } from 'components';
import { useNotificationLang } from 'hooks';

const PasswordVerified = () => {
  const { showLoginHandler, t } = useNotificationLang();
  return (
    <div className='w-[22.5rem]'>
      <div className='text-center flex flex-col items-center'>
        <Verified />
        <h2 className='text-white text-3.5 font-medium mt-10'>
          {t('password.verified.title')}
        </h2>
        <p className='text-white font-normal mt-8 text-base text-center'>
          {t('password.verified.description')}
        </p>
      </div>
      <div className='mt-8 text-center'>
        <button
          className='bg-custom-red-600 hover:bg-custom-red-700 w-48
          md:w-full h-10 text-center rounded'
          onClick={showLoginHandler}
        >
          {t('password.verified.btn')}
        </button>
      </div>
    </div>
  );
};

export default PasswordVerified;
