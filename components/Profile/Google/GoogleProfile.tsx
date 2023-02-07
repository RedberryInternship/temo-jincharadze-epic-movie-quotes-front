import { ErrorMessage } from '@hookform/error-message';
import {
  ArrowLeft,
  Button,
  CloseSuccess,
  Dashboard,
  Message,
  ProfileImageUpload,
  ProfileInput,
  Success,
  useGoogleProfile,
} from 'components';
import Link from 'next/link';
import { FormProvider } from 'react-hook-form';

const GoogleProfile = () => {
  const {
    name,
    emails,
    isOpen,
    setIsOpen,
    form,
    usernameOptions,
    errors,
    closeAddUser,
    checkUsernameHandler,
    isPromptOpen,
    closePrompt,
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
  } = useGoogleProfile();

  return (
    <Dashboard>
      <div className='relative'>
        <div className='py-6 pl-10 w-max lg:hidden'>
          <Link href='/news-feed'>
            <ArrowLeft />
          </Link>
        </div>

        {showSuccess && (
          <>
            <div
              className='bg-dashboard-color opacity-60 absolute w-full h-screen z-[10] top-0'
              onClick={closeShowSuccessHandler}
            />
            <div className='px-8 absolute top-10 w-full z-[11] lg:right-12 lg:w-max'>
              <div className='bg-success-bg border border-solid rounded border-custom-slate-300'>
                <div className='flex items-center relative p-4'>
                  <Success />
                  <p className='font-normal text-base text-custom-green-900 ml-2 lg:pr-10'>
                    {t('profile.changesUpdatedSuccessfully')}
                  </p>
                  <div
                    className='absolute right-5 top-5 cursor-pointer'
                    onClick={closeShowSuccessHandler}
                  >
                    <CloseSuccess />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className='lg:mt-8 lg:max-w-[62.5rem] lg:w-full lg:mx-auto lg:px-3'>
          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit(updateProfile)}
              className='lg:flex lg:justify-center lg:flex-col md:pr-4'
            >
              <div className='hidden lg:block text-white font-medium text-2xl mb-32 lg:ml-12'>
                {t('profile.myProfile')}
              </div>
              <div
                className={`bg-header-rgba lg:bg-custom-neutral-900 max-w-[62.5rem] w-full h-max pb-20 rounded-xl ${
                  isOpen ? 'hidden lg:block' : isPromptOpen && 'hidden lg:block'
                }`}
              >
                <div className='flex justify-center pt-6 lg:pt-0'>
                  <div className='lg:absolute top-0 lg:top-14'>
                    <ProfileImageUpload />
                    <p className='text-xl font-normal text-center text-white mt-2'>
                      {t('profile.uploadNewPhoto')}
                    </p>
                  </div>
                </div>
                <div className='px-10 mt-14 lg:mt-44 lg:px-40'>
                  <p className='text-base font-normal text-white'>
                    {' '}
                    {t('profile.username')}
                  </p>

                  <div className='flex items-center justify-between mt-1'>
                    <p className='text-lg text-white font-normal lg:hidden'>
                      {getValues('username') ? getValues('username') : name}
                    </p>

                    <div className='hidden lg:flex lg:flex-col h-max w-full pr-8 mt-1'>
                      <div className='flex items-center w-full relative'>
                        <ProfileInput
                          containerClass='w-full'
                          disabled={disabledInput}
                          placeholder={name}
                          name='username'
                          options={usernameOptions}
                          inputClass='min-w-[362px] placeholder-custom-neutral-800'
                        />
                        <div
                          className='text-lg font-normal absolute -right-14 text-custom-gray-300 ml-8 hidden lg:block'
                          onClick={disabledHandler}
                        >
                          {t('profile.edit')}
                        </div>
                      </div>

                      <div className='h-5 text-left mb-10'>
                        <ErrorMessage
                          name='username'
                          errors={errors}
                          render={({ message }) => (
                            <Message message={message} />
                          )}
                        />
                      </div>
                      <div className='border-b border-solid border-border-b' />
                    </div>

                    <div
                      className='text-lg font-normal text-custom-gray-300 lg:hidden'
                      onClick={() => setIsOpen(true)}
                    >
                      {t('profile.edit')}
                    </div>
                  </div>

                  <div className='border-b border-solid border-border-b mt-4 lg:hidden' />

                  <p className='text-base font-normal text-white mt-8 lg:mt-10'>
                    {t('profile.email')}
                  </p>

                  <div className='pr-8 hidden lg:block'>
                    <input
                      placeholder={
                        emails
                          .map((user: { email: string }) => user.email)
                          .toString()!
                      }
                      disabled={true}
                      className={`text-black bg-custom-gray-300 mt-1 pl-4 pr-11 placeholder-custom-neutral-800 md:py-2 h-12 border-custom-gray-500 rounded w-full border focus:ring-0  text-base md:text-xl focus:outline-none focus:border-custom-gray-500  border-solid  outline-none font-normal`}
                    />
                  </div>
                  <p className='text-lg text-white font-normal lg:hidden'>
                    {
                      emails
                        .map((user: { email: string }) => user.email)
                        .toString()!
                    }
                  </p>
                  <div className='border-b border-solid border-border-b mt-4 lg:hidden' />
                </div>
              </div>
              {saveChanges && !isOpen && !isPromptOpen && (
                <div>
                  <div className='flex items-center justify-between lg:justify-end mt-5 px-5'>
                    <div
                      className='text-white text-base font-normal cursor-pointer'
                      onClick={clearInputs}
                    >
                      {t('profile.cancel')}
                    </div>
                    <Button
                      type='submit'
                      className='bg-custom-red-600 hover:bg-custom-red-700 py-2 px-[0.4rem] rounded text-white cursor-pointer text-base font-normal lg:ml-6'
                      onClick={confirmPrompt}
                    >
                      {t('profile.saveChanges')}
                    </Button>
                  </div>
                </div>
              )}
            </form>
            <div className='lg:hidden'>
              {isOpen && (
                <div>
                  <div className='w-full h-max px-10 bg-header-rgba pt-20 pb-[4.6rem] rounded-xl'>
                    <ProfileInput
                      label={t('profile.enterNewUsername')!}
                      name='username'
                      options={usernameOptions}
                    />
                    <div className='mt-1 h-5'>
                      <ErrorMessage
                        name='username'
                        errors={errors}
                        render={({ message }) => <Message message={message} />}
                      />
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-10 mt-10'>
                    <div
                      className='text-white text-base font-normal cursor-pointer'
                      onClick={closeAddUser}
                    >
                      {t('profile.cancel')}
                    </div>
                    <div
                      className='bg-custom-red-600 hover:bg-custom-red-700 py-2 px-5 rounded text-white cursor-pointer text-base font-normal'
                      onClick={checkUsernameHandler}
                    >
                      {t('profile.add')}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='lg:hidden'>
              {isPromptOpen && (
                <div className='px-10'>
                  <div className='relative'>
                    <div className='bg-prompt-bg w-full -rotate-180 opacity-30 rounded-xl h-52' />
                    <div className='absolute top-0 pt-16 w-full'>
                      <div className='text-center w-full'>
                        <p className='text-white'>{t('profile.areYouSure')}</p>
                      </div>
                      <div className='border-b border-solid border-border-b mt-11 w-full' />
                      <div className='flex items-center justify-between mt-5 px-5'>
                        <div
                          className='text-white text-base font-normal cursor-pointer'
                          onClick={closePrompt}
                        >
                          {t('profile.cancel')}
                        </div>
                        <div
                          className='bg-custom-red-600 hover:bg-custom-red-700 py-2 px-[0.4rem] rounded text-white cursor-pointer text-base font-normal'
                          onClick={confirmPrompt}
                        >
                          {t('profile.confirm')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </FormProvider>
        </div>
      </div>
    </Dashboard>
  );
};

export default GoogleProfile;
