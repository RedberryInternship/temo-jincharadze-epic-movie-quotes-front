import { ArrowLeft, Button, Input, useForgotPassword } from 'components';
import { ForgotPasswordTypes } from './types';

const ForgotPassword: React.FC<ForgotPasswordTypes> = (props) => {
  const { t } = useForgotPassword();
  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white font-medium text-2xl'>
          {t('forgotPassword.about')}
        </h2>
        <p className='text-custom-gray-500 text-xs font-normal mt-3'>
          {t('forgotPassword.description')}
        </p>
      </div>
      <div className='w-full'>
        <form>
          <Input
            containerClass='mt-8'
            label={t('forgotPassword.email')}
            type='email'
            name='email'
            placeholder={t('forgotPassword.emailPlaceholder')!}
          />

          <Button className='bg-custom-red-600 hover:bg-custom-red-700 w-full text-white text-center h-[2.4rem] mt-10 rounded'>
            {t('forgotPassword.btn')}
          </Button>
        </form>
        <div
          className='mt-6 flex justify-center items-center cursor-pointer'
          onClick={props.backToLoginClick}
        >
          <ArrowLeft />
          <p className='text-base font-normal text-custom-gray-500 ml-3'>
            {t('forgotPassword.backToLogin')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
