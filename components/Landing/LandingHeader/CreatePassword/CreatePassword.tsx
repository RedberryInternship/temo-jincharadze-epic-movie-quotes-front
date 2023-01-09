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
    getValues,
    isLoading,
    resetPasswordHandler,
    backToLogin,
  } = useCreatePassword();

  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-3.5 font-medium'>Create new password</h2>
        <p className='text-custom-gray-500 text-base font-normal mt-3'>
          Your new password must be different from previous used passwords
        </p>
      </div>
      <div className='w-full'>
        <FormProvider {...form}>
          <form>
            <Input
              showPassword={showPassword}
              hasEye={true}
              register={register('password', {
                required: { value: true, message: t('errors.required') },
                minLength: { value: 8, message: t('errors.minPassword') },
                maxLength: { value: 15, message: t('errors.max') },
                pattern: {
                  value: /^[a-z0-9]*$/,
                  message: t('errors.passwordPattern'),
                },
              })}
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
              register={register('confirm_password', {
                validate: (value) => value === getValues('password'),
              })}
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
              onClick={resetPasswordHandler}
              className={`${
                isLoading
                  ? 'bg-custom-rose-500'
                  : 'bg-custom-red-600 hover:bg-custom-red-700'
              } w-full text-white text-center h-[2.4rem] mt-3 rounded`}
            >
              Reset password
            </Button>
          </form>
        </FormProvider>
        <div
          className='mt-8 flex justify-center items-center cursor-pointer'
          onClick={backToLogin}
        >
          <ArrowLeft />
          <p className='text-base font-normal text-custom-gray-500 ml-3'>
            Back to log in
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
