import { ErrorMessage } from '@hookform/error-message';
import {
  Button,
  Input,
  ArrowLeft,
  useCreatePassword,
  Message,
} from 'components';
import { FormProvider } from 'react-hook-form';

const CreatePassword = () => {
  const {
    t,
    form,
    errors,
    register,
    showPassword,
    showConfirmPassword,
    showPasswordhandler,
    showConfirmPasswordhandler,
    passwordOptions,
    confirmPasswordOptions,
    isLoading,
    resetPasswordHandler,
    backToLogin,
    handleSubmit,
  } = useCreatePassword();

  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-3.5 font-medium'>
          {t('createPassword')}
        </h2>
        <p className='text-custom-gray-500 text-base font-normal mt-3'>
          {t('resetPasswordAbout')}
        </p>
      </div>
      <div className='w-full'>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(resetPasswordHandler)}>
            <Input
              showPassword={showPassword}
              hasEye={true}
              register={register('password', passwordOptions)}
              label={t('signUp.password')}
              type={showPassword ? 'text' : 'password'}
              name='password'
              onPasswordShow={showPasswordhandler}
              placeholder={t('signUp.passwordPlaceholder')!}
            />

            <div className='h-7 mt-1'>
              <ErrorMessage
                name='password'
                errors={errors}
                render={({ message }) => <Message message={message} />}
              />
            </div>

            <Input
              showPassword={showConfirmPassword}
              hasEye={true}
              register={register('confirm_password', confirmPasswordOptions)}
              label={t('signUp.confirmPassword')}
              type={showConfirmPassword ? 'text' : 'password'}
              onPasswordShow={showConfirmPasswordhandler}
              name='confirm_password'
              placeholder={t('signUp.confirmPasswordPlaceholder')!}
            />

            <div className='h-7 mt-1'>
              <ErrorMessage
                name='confirm_password'
                errors={errors}
                render={() => <Message message={t('errors.confirmPassword')} />}
              />
            </div>
            <Button
              disabled={isLoading}
              type='submit'
              className={`${
                isLoading
                  ? 'bg-custom-rose-500'
                  : 'bg-custom-red-600 hover:bg-custom-red-700'
              } w-full text-white text-center h-[2.4rem] mt-3 rounded`}
            >
              {t('resetPassword')}
            </Button>
          </form>
        </FormProvider>
        <div
          className='mt-8 flex justify-center items-center cursor-pointer'
          onClick={backToLogin}
        >
          <ArrowLeft />
          <p className='text-base font-normal text-custom-gray-500 ml-3'>
            {t('backToLogin')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
