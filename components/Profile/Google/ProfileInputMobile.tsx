import { ErrorMessage } from '@hookform/error-message';
import { Message, ProfileInput, useProfileInputMobile } from 'components';
import { ProfileInputMobileProps } from './types';

const ProfileInputMobile = (props: ProfileInputMobileProps) => {
  const { t, query } = useProfileInputMobile();
  return (
    <div className='px-0'>
      <div
        className={`w-full  bg-header-rgba h-max px-10 ${
          query.mode === 'add-email' && 'lg:pt-6 lg:pb-11'
        }  ${
          query.mode === 'add-email' &&
          'lg:bg-transparent lg:px-0 bg-header-rgba'
        } rounded-xl ${
          query.mode === 'edit-password' ? 'pb-0 lg:pb-[4.6rem]' : 'pb-[4.6rem]'
        } ${props.hasEye === true ? 'pt-6 lg:pt-0' : 'pt-20'} ${
          props.hasEye === true && 'lg:bg-transparent lg:pl-0 lg:pr-8'
        }`}
      >
        {props.hasEye === true && (
          <div className='bg-custom-neutral-900 w-full p-6 lg:max-w-[33rem] mb-8 rounded border border-solid border-border-b'>
            <p className='text-base font-normal text-white'>
              {t('profile.shouldContain')}
            </p>
            <div className='flex items-center pt-4'>
              <div
                className={`w-1 h-1 rounded-full bg-custom-neutral-400 ${
                  props.length! === 8
                    ? 'bg-custom-green-700'
                    : 'bg-custom-neutral-400 '
                }`}
              />
              <p
                className={`text-sm font-normal ml-[0.4rem] ${
                  props.length! === 8 ? 'text-white' : 'text-custom-neutral-400'
                }`}
              >
                8 {t('profile.orMoreCharacters')}
              </p>
            </div>

            <div className='flex items-center mt-1'>
              <div
                className={`w-1 h-1 rounded-full ${
                  props.length! <= 15 && props.length! > 8
                    ? 'bg-custom-green-700'
                    : 'bg-custom-neutral-400 '
                }`}
              />
              <p
                className={`text-sm font-normal ml-[0.4rem] ${
                  props.length! <= 15 && props.length! > 8
                    ? 'text-white'
                    : 'text-custom-neutral-400'
                }`}
              >
                15 {t('profile.lowercaseCharacter')}
              </p>
            </div>
          </div>
        )}

        <div className='lg:flex lg:justify-center lg:flex-col w-full relative'>
          <ProfileInput
            type={props.type}
            label={props.label}
            name={props.name}
            options={props.options}
            onPasswordShow={props.onPasswordShow}
            showPassword={props.showPassword}
            hasEye={props.hasEye}
          />
          <div
            className={`mt-1 h-5  ${
              query.mode === 'add-email' &&
              'lg:absolute lg:-bottom-10 lg:left-0'
            }`}
          >
            <ErrorMessage
              name={props.name}
              errors={props.errors}
              render={({ message }) => <Message message={message} />}
            />
          </div>
        </div>
        {props.hasEye === true && (
          <>
            <ProfileInput
              type={props.confirmType}
              label={props.confirmLabel}
              name='confirm_password'
              options={props.confirmOptions!}
              onPasswordShow={props.onConfirmPasswordShow}
              showPassword={props.showConfirmPassword}
              hasEye={props.hasEye}
            />

            <div className='mt-1 h-5 w-full'>
              <ErrorMessage
                name='confirm_password'
                errors={props.errors}
                render={() => <Message message={t('errors.confirmPassword')} />}
              />
            </div>
          </>
        )}
      </div>
      <div
        className={`flex items-center justify-between px-10 mt-10 ${
          props.hasEye === true && 'lg:hidden'
        } ${query.mode === 'add-email' && 'lg:pb-10 lg:justify-end'}`}
      >
        <div
          className={`text-white text-base lg:text-xl font-normal cursor-pointer ${
            query.mode === 'add-email' && 'lg:hidden'
          }`}
          onClick={props.onClose}
        >
          {props.cancel}
        </div>

        <div
          className={`text-white text-base lg:text-xl font-normal cursor-pointer ${
            query.mode === 'add-email' ? 'hidden lg:block' : 'hidden'
          }`}
          onClick={props.onAddEmailClose}
        >
          {props.cancel}
        </div>

        <div
          className={`bg-custom-red-600 hover:bg-custom-red-700 py-2 px-5 rounded text-white cursor-pointer text-base lg:text-xl ${
            query.mode === 'add-email' && 'lg:hidden'
          } font-normal ${query.mode === 'add-email' && 'lg:ml-8'}`}
          onClick={props.checkInput}
        >
          {props.add}
        </div>
        <div
          className={`bg-custom-red-600 hover:bg-custom-red-700 py-2 px-5 rounded text-white cursor-pointer text-base lg:text-xl ${
            query.mode === 'add-email' ? 'hidden lg:block' : 'hidden'
          } font-normal ${query.mode === 'add-email' && 'lg:ml-8'}`}
          onClick={props.addEmail}
        >
          {props.add}
        </div>
      </div>
    </div>
  );
};

export default ProfileInputMobile;
