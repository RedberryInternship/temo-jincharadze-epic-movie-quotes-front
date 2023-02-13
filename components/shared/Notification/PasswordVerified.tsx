import { Button, Verified } from 'components';
import { useNotificationLang } from 'hooks';

const PasswordVerified = (props: { mode: string }) => {
  const { showLoginHandler, t } = useNotificationLang();
  return (
    <div className='w-[22.5rem]'>
      <div className='text-center flex flex-col items-center px-2 md:px-0'>
        <Verified />
        <h2 className='text-white text-3.5 font-medium mt-10'>
          {t('password.verified.title')}
        </h2>
        <p className='text-white font-normal mt-8 text-base text-center'>
          {t('password.verified.description')}
        </p>
      </div>
      <div className='mt-8 text-center'>
        <Button
          className={`bg-custom-red-600 hover:bg-custom-red-700 
          md:w-full h-10 text-center rounded ${
            props.mode === 'password verified' && 'w-full'
          }`}
          onClick={showLoginHandler}
        >
          {t('password.verified.btn')}
        </Button>
      </div>
    </div>
  );
};

export default PasswordVerified;
