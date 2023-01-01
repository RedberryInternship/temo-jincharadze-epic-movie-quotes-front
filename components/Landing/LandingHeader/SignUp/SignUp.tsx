import { ErrorMessage } from '@hookform/error-message';
import { Button, Google, Input, Message, useSignUp } from 'components';
import { SignUpProps } from './types';

const SignUp: React.FC<SignUpProps> = (props) => {
  const {
    t,
    getValues,
    register,
    formState: { errors },
  } = useSignUp();

  return (
    <div className='w-[22.5rem]'>
      <div className='mb-8 text-center'>
        <h2 className='text-white text-2xl font-medium text-3.5'>
          {t('signUp.about')}
        </h2>
        <p className='text-custom-gray-500 text-base font-normal mt-3'>
          {t('signUp.description')}
        </p>
      </div>
      <div className='w-full'>
        <form>
          <Input
            register={register('username', {
              required: { value: true, message: t('errors.required') },
              minLength: { value: 3, message: t('errors.min') },
              maxLength: { value: 15, message: t('errors.max') },
              pattern: {
                value: /^[a-z0-9]*$/,
                message: t('errors.usernamePattern'),
              },
            })}
            label={t('signUp.username')}
            type='text'
            name='username'
            placeholder={t('signUp.usernamePlaceholder')!}
          />
          <div className='h-7 mt-1'>
            <ErrorMessage
              name='username'
              errors={errors}
              render={({ message }) => <Message message={message} />}
            />
          </div>
          <Input
            register={register('email', {
              required: { value: true, message: t('errors.required') },
              pattern: {
                value: /(.*)@.*\./i,
                message: t('errors.emailPattern'),
              },
            })}
            label={t('signUp.email')}
            type='email'
            name='email'
            placeholder={t('signUp.emailPlaceholder')!}
          />

          <div className='h-7 mt-1'>
            <ErrorMessage
              name='email'
              errors={errors}
              render={({ message }) => <Message message={message} />}
            />
          </div>

          <Input
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
            type='password'
            name='password'
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
            register={register('confirm_password', {
              required: { value: true, message: t('errors.required') },
              validate: (value) => value === getValues('password'),
            })}
            label={t('signUp.confirmPassword')}
            type='password'
            name='confirm_password'
            placeholder={t('signUp.confirmPasswordPlaceholder')!}
          />

          <div className='h-7 mt-1'>
            <ErrorMessage
              name='confirm_password'
              errors={errors}
              render={({ message }) => <Message message={message} />}
            />
          </div>

          <Button className='bg-custom-red-600 hover:bg-red-400 w-full text-white text-center h-[2.4rem] mt-10 rounded'>
            {t('signUp.getStarted')}
          </Button>
        </form>
        <Button className='w-full mt-4 border h-[2.4rem] rounded hover:bg-white hover:text-black'>
          <div className='flex items-center justify-center'>
            <Google />
            <span className='ml-2'>{t('signUp.signUpWithGoogle')}</span>
          </div>
        </Button>
        <div className='mt-8 flex justify-center'>
          <p className='text-base font-normal text-custom-gray-500'>
            {t('signUp.alreadyHaveAnAccount')}
            <span
              className='text-custom-blue-600 underline ml-1 cursor-pointer'
              onClick={props.onLoginClick}
            >
              {t('signUp.logIn')}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
