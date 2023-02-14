import {
  ArrowLeft,
  Button,
  CloseSuccess,
  Dashboard,
  ProfileImageUpload,
  ProfileInputMobile,
  ProfileStaticInput,
  Prompt,
  Success,
  Updated,
  useGoogleProfile,
} from 'components';
import Link from 'next/link';
import { FormProvider } from 'react-hook-form';

const GoogleProfile = (props: {
  mode?: string;
  children?: React.ReactNode;
}) => {
  const {
    name,
    emails,
    form,
    usernameOptions,
    errors,
    closeAddUser,
    checkUsernameHandler,
    closeUserNamePrompt,
    confirmPrompt,
    getValues,
    clearInputs,
    saveChanges,
    updateProfile,
    handleSubmit,
    showSuccess,
    closeShowSuccessHandler,
    disabledInput,
    disabledHandler,
    t,
    passwordOptions,
    closeAddPassword,
    checkPasswordHandler,
    confirmPasswordOptions,
    passwordOpenHandler,
    showConfirmPasswordHandler,
    showPasswordhandler,
    showPassword,
    showConfirmPassword,
    desktopPasswordOpenHandler,
    emailModal,
    closeEmailAddSuccess,
    closePrimaryChangeSuccess,
    query,
    isValid,
    showAddUserHandler,
    closePasswordPrompt,
    updateUsernameHandler,
    nameUpdated,
    closeNameUpdated,
    updatePasswordHandler,
    passwordUpdated,
    closePasswordUpdated,
    closeEmailVerifiedSuccess,
  } = useGoogleProfile();

  return (
    <Dashboard>
      <div className='relative'>
        <div className='py-6 pl-10 w-max lg:hidden'>
          <div className='lg:hidden'>
            <Link href='/profile'>
              <ArrowLeft />
            </Link>
          </div>
        </div>
        {query.mode === 'add-email' && (
          <Link href='/profile' className='hidden lg:block'>
            <div className='top-0 left-0 absolute h-full w-full bg-dashboard-color z-[2] opacity-80 backdrop-blur-[2px]' />
          </Link>
        )}
        {emailModal.showAddEmailSuccess && (
          <>
            <div
              className='bg-dashboard-color opacity-60 lg:opacity-0 fixed w-full h-full z-[1] top-20'
              onClick={closeEmailAddSuccess}
            />
            <div className='px-8 absolute top-10 w-full z-[1] lg:right-12 lg:w-max'>
              <div className='bg-success-bg border border-solid rounded border-custom-slate-300'>
                <div className='flex items-center relative p-4'>
                  <Success />
                  <p className='font-normal text-base text-custom-green-900 ml-2 lg:pr-28'>
                    {t('profile.newEmailAdded')}
                  </p>

                  <div
                    className='absolute right-5 top-5 cursor-pointer'
                    onClick={closeEmailAddSuccess}
                  >
                    <CloseSuccess />
                  </div>
                </div>
                <p className='text-custom-neutral-900 pb-12 text-base font-normal mt-2 ml-10'>
                  {t('profile.verify')}
                </p>
              </div>
            </div>
          </>
        )}

        {emailModal.primaryChanged && (
          <>
            <div
              className='bg-dashboard-color opacity-60 lg:opacity-0 fixed w-full h-screen z-[1] top-0'
              onClick={closePrimaryChangeSuccess}
            />
            <div className='px-8 absolute top-10 w-full z-[1] lg:right-12 lg:w-max'>
              <div className='bg-success-bg border border-solid rounded border-custom-slate-300'>
                <div className='flex items-center relative p-4'>
                  <Success />
                  <p className='font-normal text-base text-custom-green-900 ml-2 lg:pr-10'>
                    {t('profile.primary')}
                  </p>
                  <div
                    className='absolute right-5 top-5 cursor-pointer'
                    onClick={closePrimaryChangeSuccess}
                  >
                    <CloseSuccess />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {showSuccess && (
          <Updated
            close={closeShowSuccessHandler}
            text={t('profile.changesUpdatedSuccessfully')}
          />
        )}
        {nameUpdated && (
          <Updated
            close={closeNameUpdated}
            text={t('profile.usernameChanged')}
          />
        )}
        {passwordUpdated && (
          <Updated
            close={closePasswordUpdated}
            text={t('profile.passwordChanged')}
          />
        )}
        {emailModal.isEmailVerified && (
          <Updated
            close={closeEmailVerifiedSuccess}
            text={t('profile.emailVerified')}
          />
        )}

        <div className='lg:mt-8 lg:max-w-[64rem] lg:w-full lg:mx-auto lg:px-3 lg:pb-10'>
          <div className='relative'>
            <FormProvider {...form}>
              <form
                onSubmit={handleSubmit(updateProfile)}
                className='lg:flex lg:justify-center lg:flex-col md:pr-4'
              >
                <div className='hidden lg:block text-white font-medium text-2xl mb-32 lg:ml-12'>
                  {t('profile.myProfile')}
                </div>
                <div
                  className={`lg:bg-custom-neutral-900  max-w-[64rem] w-full h-max pb-20 rounded-xl ${
                    query.mode === 'edit-username' &&
                    'bg-header-rgba lg:bg-transparent'
                  } ${
                    query.mode === 'show-email'
                      ? 'bg-header-rgba'
                      : query.mode === 'edit-username'
                      ? 'bg-header-rgba'
                      : query.mode === 'edit-password'
                      ? 'bg-transparent'
                      : query.mode === 'email-confirm'
                      ? 'bg-transparent'
                      : 'bg-header-rgba'
                  } ${
                    query.mode === 'edit-username'
                      ? 'hidden lg:block'
                      : query.mode === 'username-confirm'
                      ? 'hidden lg:block'
                      : query.mode === 'password-confirm' && 'hidden lg:block'
                  }`}
                >
                  <div
                    className={`flex justify-center pt-6 lg:pt-0 ${
                      query.mode === 'show-email'
                        ? 'hidden lg:flex'
                        : query.mode === 'email-confirm'
                        ? 'hidden lg:flex'
                        : query.mode === 'add-email'
                        ? 'hidden lg:block'
                        : query.mode === 'edit-password' && 'hidden lg:flex'
                    }`}
                  >
                    <div
                      className={`lg:absolute lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-14 ${
                        query.mode === 'show-email' && 'hidden lg:block'
                      }`}
                    >
                      <ProfileImageUpload />
                    </div>
                  </div>
                  <div
                    className={`px-10 lg:mt-44 lg:px-40 ${
                      props.mode === 'profileEmail' && 'lg:px-10'
                    } ${query.mode === 'edit-password' && 'mt-0'} ${
                      query.mode === 'show-email'
                        ? 'mt-0'
                        : query.mode === 'email-confirm'
                        ? 'mt-0'
                        : query.mode === 'add-email' && 'mt-0'
                    }`}
                  >
                    <div
                      className={
                        query.mode === 'show-email'
                          ? 'lg:block'
                          : query.mode === 'email-confirm'
                          ? 'lg:block'
                          : query.mode === 'add-email'
                          ? 'lg:block'
                          : ''
                      }
                    >
                      <div
                        className={`mt-14 lg:mt-0
                         ${
                           query.mode === 'edit-password'
                             ? 'hidden lg:block'
                             : ''
                         }
                         ${query.mode === 'add-email' && 'hidden lg:block'}
                         ${query.mode === 'show-email' && 'hidden lg:block'}
                         ${query.mode === 'email-confirm' && 'hidden lg:block'}
                        `}
                      >
                        <ProfileStaticInput
                          label={t('profile.username')}
                          inputValue={
                            getValues('username') ? getValues('username') : name
                          }
                          disabled={disabledInput}
                          placeholder={name}
                          name='username'
                          options={usernameOptions}
                          disabledHandler={disabledHandler}
                          edit={t('profile.edit')}
                          errors={errors}
                          editHandler={showAddUserHandler}
                        />
                      </div>

                      {props.mode === 'profileEmail' && (
                        <div
                          className={
                            !query.mode
                              ? 'mt-8'
                              : query.mode === 'edit-password' ||
                                query.mode === 'show-email'
                              ? 'lg:mt-8'
                              : ''
                          }
                        >
                          <div className='lg:flex-col-reverse lg:flex'>
                            <div>
                              <div
                                className={`lg:hidden block ${
                                  query.mode === 'edit-password'
                                    ? 'hidden lg:block'
                                    : query.mode === 'show-email'
                                    ? 'hidden lg:flex'
                                    : query.mode === 'add-email'
                                    ? 'hidden lg:flex'
                                    : query.mode === 'email-confirm' &&
                                      'hidden lg:flex'
                                }`}
                              >
                                <ProfileStaticInput
                                  isPassword={true}
                                  label={t('profile.password')}
                                  disabled={true}
                                  placeholder='••••••••••••'
                                  name='password'
                                  options={passwordOptions}
                                  edit={t('profile.edit')}
                                  errors={errors}
                                  disabledHandler={passwordOpenHandler}
                                  editHandler={passwordOpenHandler}
                                />
                              </div>
                              <div className='hidden lg:block'>
                                <ProfileStaticInput
                                  isPassword={true}
                                  label={t('profile.password')}
                                  disabled={true}
                                  placeholder='••••••••••••'
                                  name='static'
                                  options={passwordOptions}
                                  edit={
                                    query.mode !== 'edit-password'
                                      ? t('profile.edit')
                                      : ''
                                  }
                                  errors={errors}
                                  disabledHandler={desktopPasswordOpenHandler}
                                />
                              </div>

                              {query.mode === 'edit-password' && (
                                <div>
                                  <ProfileInputMobile
                                    length={getValues('password')?.length}
                                    hasEye={true}
                                    type={showPassword ? 'text' : 'password'}
                                    confirmType={
                                      showConfirmPassword ? 'text' : 'password'
                                    }
                                    label={t('profile.newPassword')!}
                                    name='password'
                                    options={passwordOptions}
                                    errors={errors}
                                    onClose={closeAddPassword}
                                    checkInput={checkPasswordHandler}
                                    cancel={t('profile.cancel')}
                                    add={t('profile.add')}
                                    confirmLabel={t('profile.confirmPassword')!}
                                    confirmOptions={confirmPasswordOptions}
                                    showPassword={showPassword}
                                    showConfirmPassword={showConfirmPassword}
                                    onPasswordShow={showPasswordhandler}
                                    onConfirmPasswordShow={
                                      showConfirmPasswordHandler
                                    }
                                  />
                                </div>
                              )}
                            </div>
                            <div
                              className={`text-white mt-8 lg:mt-0 w-full ${
                                query.mode === 'show-email'
                                  ? 'mt-0'
                                  : query.mode === 'email-confirm'
                                  ? 'mt-0'
                                  : query.mode === 'add-email' && 'mt-0'
                              } ${
                                query.mode === 'edit-password' &&
                                'hidden lg:block'
                              }`}
                            >
                              {props.children}
                              <div className='border-b border-solid border-border-b lg:max-w-[33rem] w-full my-10 hidden lg:block' />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <p
                      className={`text-base font-normal text-white mt-8 lg:mt-10 ${
                        props.mode === 'profileEmail' && 'hidden'
                      }`}
                    >
                      {t('profile.email')}
                    </p>

                    <div
                      className={`hidden max-w-[33rem] lg:block ${
                        props.mode === 'profileEmail' && 'hidden'
                      }`}
                    >
                      <input
                        placeholder={
                          emails
                            .map((user: { email: string }) => user.email)
                            .toString()!
                        }
                        disabled={true}
                        className={`text-black bg-custom-gray-300 mt-1 pl-4 pr-11 placeholder-custom-neutral-800 truncate md:py-2 h-12 border-custom-gray-500 rounded w-full border focus:ring-0  text-base md:text-xl focus:outline-none focus:border-custom-gray-500  border-solid  outline-none font-normal ${
                          props.mode === 'profileEmail' && 'hidden'
                        }`}
                      />
                    </div>
                    <p
                      className={`text-lg text-white font-normal truncate lg:hidden ${
                        props.mode === 'profileEmail' && 'hidden'
                      }`}
                    >
                      {
                        emails
                          .map((user: { email: string }) => user.email)
                          .toString()!
                      }
                    </p>
                    <div
                      className={`border-b border-solid border-border-b mt-4 lg:hidden ${
                        props.mode === 'profileEmail' && 'hidden'
                      }`}
                    />
                  </div>
                </div>
                {saveChanges && isValid && (
                  <div className={`mb-11 ${query.mode && 'hidden lg:block'}`}>
                    <div className='flex items-center justify-between lg:justify-end mt-5 px-5'>
                      <div
                        className='text-custom-gray-300 text-base lg:text-xl font-normal cursor-pointer'
                        onClick={clearInputs}
                      >
                        {t('profile.cancel')}
                      </div>
                      <Button
                        type='submit'
                        className='bg-custom-red-600 hover:bg-custom-red-700 py-2 px-[0.4rem] lg:px-4 rounded text-white cursor-pointer text-base lg:text-xl font-normal lg:ml-8'
                        onClick={confirmPrompt}
                      >
                        {t('profile.saveChanges')}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
              <div className='lg:hidden'>
                {query.mode === 'edit-username' && (
                  <ProfileInputMobile
                    label={t('profile.enterNewUsername')!}
                    name='username'
                    options={usernameOptions}
                    errors={errors}
                    onClose={closeAddUser}
                    checkInput={checkUsernameHandler}
                    cancel={t('profile.cancel')}
                    add={t('profile.add')}
                  />
                )}
              </div>
              <div className='lg:hidden'>
                {query.mode === 'username-confirm' && (
                  <Prompt
                    areYouSureText={t('profile.areYouSure')}
                    closePrompt={closeUserNamePrompt}
                    cancelText={t('profile.cancel')}
                    confirmPrompt={updateUsernameHandler}
                    confirmText={t('profile.confirm')}
                  />
                )}

                {query.mode === 'password-confirm' && (
                  <Prompt
                    areYouSureText={t('profile.areYouSure')}
                    closePrompt={closePasswordPrompt}
                    cancelText={t('profile.cancel')}
                    confirmPrompt={updatePasswordHandler}
                    confirmText={t('profile.confirm')}
                  />
                )}
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default GoogleProfile;
