import { Button, Google, Input } from 'components';
import { FormProvider } from 'react-hook-form';
import { LoginProps } from './types';
import useLogin from './useLogin';

const LogIn: React.FC<LoginProps> = (props) => {
  const { t, form, register, handleLogin } = useLogin();
  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-2xl font-medium'>{t('logIn.about')}</h2>
        <p className='text-custom-gray-500  font-normal mt-3 text-xs'>
          {t('logIn.description')}
        </p>
      </div>
      <div className='w-full'>
        <FormProvider {...form}>
          <form>
            <Input
              register={register('login', {
                required: { value: true, message: t('errors.required') },
              })}
              containerClass='mt-8'
              label={t('logIn.email')}
              type='text'
              name='login'
              placeholder={t('logIn.emailPlaceholder')!}
            />
            <Input
              register={register('password', {
                required: { value: true, message: t('errors.required') },
              })}
              containerClass='mt-8'
              label={t('logIn.password')}
              type='password'
              name='password'
              placeholder={t('logIn.passwordPlaceholder')!}
            />

            <div className='flex items-center justify-between mt-8'>
              <Input
                register={register('remember')}
                type='checkbox'
                name='remember'
                value='1'
                label={t('logIn.remember')}
                containerClass='flex items-center h-4'
              />

              <div
                className='text-custom-blue-600 cursor-pointer  underline text-base font-normal'
                onClick={props.onForgotPassword}
              >
                {t('logIn.forgotPassword')}
              </div>
            </div>

            <Button
              className='bg-custom-red-600 hover:bg-custom-red-700 w-full text-white text-center h-[2.4rem] mt-10 rounded'
              onClick={handleLogin}
            >
              {t('logIn.btn')}
            </Button>
          </form>
        </FormProvider>
        <Button className='w-full mt-4 border h-[2.4rem] rounded hover:bg-white hover:text-black'>
          <div className='flex items-center justify-center'>
            <Google />
            <span className='ml-2'>{t('logIn.googleBtn')}</span>
          </div>
        </Button>
        <div className='mt-8 flex justify-center'>
          <p className='text-base font-normal text-custom-gray-500'>
            {t('logIn.dontHaveAnAccount')}
            <span
              className='text-custom-blue-600 underline ml-1 cursor-pointer'
              onClick={props.onSignUpClick}
            >
              {t('logIn.signUp')}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
