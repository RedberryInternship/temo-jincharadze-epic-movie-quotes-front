import {
  AddEmail,
  ArrowRight,
  GoogleProfile,
  NotVerified,
  ProfileInputMobile,
  Prompt,
  Success,
  useUserProfile,
} from 'components';
import { FormProvider } from 'react-hook-form';

const UserProfile = () => {
  const {
    email,
    form,
    errors,
    emailOptions,
    openEmailModal,
    openAddEmail,
    checkEmailHandler,
    nonePrimary,
    deleteEmailHandler,
    changeEmailToPrimaryHandler,
    t,
    query,
    addEmailHandler,
    closeEmailPrompt,
    closeAddEmail,
  } = useUserProfile();
  return (
    <GoogleProfile mode='profileEmail'>
      <div className='w-full lg:hidden'>
        {query.mode === 'email-confirm' && (
          <Prompt
            areYouSureText={t('profile.areYouSure')}
            closePrompt={closeEmailPrompt}
            cancelText={t('profile.cancel')}
            confirmPrompt={addEmailHandler}
            confirmText={t('profile.confirm')}
          />
        )}
      </div>

      <div
        className={`w-full ${query.mode === 'add-email' && 'hidden lg:block'} ${
          query.mode === 'email-confirm' && 'hidden lg:block'
        }`}
      >
        <div
          className={`flex items-center lg:hidden justify-between ${
            query.mode === 'show-email'
              ? 'hidden'
              : query.mode === 'email-confirm'
              ? 'hidden'
              : query.mode === 'add-email' && 'hidden'
          }`}
        >
          <p className='text-base lg:text-xl font-normal'>
            {t('profile.email')}
          </p>
          <div onClick={openEmailModal}>
            <ArrowRight width='12' height='12' />
          </div>
        </div>

        <div className={`pt-8 ${!query.mode && 'hidden lg:block'}  w-full`}>
          <h2 className='text-sm font-normal text-white'>
            <span className='lg:hidden uppercase'>
              {t('profile.primaryEmail')}
            </span>
            <span className='hidden lg:block lg:mb-2 lg:text-base'>
              {t('profile.email')}
            </span>
          </h2>
          <div className='lg:relative lg:w-full lg:flex lg:items-center'>
            <div className='py-2 bg-primary-email-bg mt-6 lg:mt-2 lg:max-w-[33rem] w-full rounded relative flex justify-between items-center pl-4 border border-solid border-custom-green-700'>
              <span className='truncate pr-7 text-xl font-normal'>
                {email && email.email}
              </span>
              <div className='pr-4 right-0'>
                <Success width='16' height='16' />
              </div>
            </div>
            <div className='h-max w-max hidden lg:text-xl lg:block lg:ml-8 lg:text-custom-gray-300'>
              {t('profile.primaryEm')}
            </div>
          </div>

          <div className='border-b border-solid border-border-b mt-6 w-full lg:hidden' />

          {nonePrimary && (
            <div className='mt-14 lg:mt-8'>
              {nonePrimary.map(
                (user: {
                  id: number;
                  email: string;
                  email_verified_at: string | null;
                }) => {
                  return (
                    <div key={user.id} className=''>
                      <span className='hidden lg:block lg:mb-2'>
                        {t('profile.email')}
                      </span>
                      <div className='lg:flex lg:w-full lg:items-center'>
                        <div className='lg:w-full lg:max-w-[33rem]'>
                          <h2
                            className={`font-normal lg:flex lg:items-center lg:justify-between text-xl text-white truncate lg:py-2 lg:px-4 lg:rounded ${
                              !user.email_verified_at
                                ? 'lg:bg-not-verified-bg lg:border-custom-amber-500 lg:border'
                                : 'lg:bg-white lg:text-black'
                            }`}
                          >
                            {user.email}
                            {!user.email_verified_at && (
                              <div className='hidden lg:flex'>
                                <NotVerified />
                              </div>
                            )}
                          </h2>
                        </div>
                        <div className='flex items-center justify-between lg:justify-start my-6'>
                          {user.email_verified_at ? (
                            <div
                              onClick={() =>
                                changeEmailToPrimaryHandler(user.email)
                              }
                              className='rounded border lg:text-custom-gray-300 text-base lg:text-xl whitespace-nowrap cursor-pointer border-solid border-custom-zinc-300 py-2 px-4 lg:border-none lg:px-0 lg:py-0 lg:ml-8'
                            >
                              {t('profile.makeThisPrimary')}
                            </div>
                          ) : (
                            <div className='flex items-center lg:ml-8'>
                              <div className='lg:hidden'>
                                <NotVerified />
                              </div>
                              <span className='text-base lg:text-xl font-normal italic ml-2 lg:ml-0  text-custom-amber-500 lg:text-custom-gray-300 lg:not-italic'>
                                {t('profile.notVerified')}
                              </span>
                            </div>
                          )}
                          <div className='border-l-2 border-custom-gray-500 h-4 ml-5 hidden lg:block' />
                          <div className='lg:ml-5'>
                            <div
                              className='text-base lg:text-xl font-normal cursor-pointer lg:text-custom-gray-300'
                              onClick={() => deleteEmailHandler(user.email)}
                            >
                              {t('profile.remove')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='border-b border-solid border-border-b mt-6 w-full mb-8 lg:hidden' />
                    </div>
                  );
                }
              )}
            </div>
          )}

          <div className='mt-14'>
            <h2 className='text-sm font-normal uppercase lg:hidden'>
              {t('profile.addNewEmail')}
            </h2>

            <div
              onClick={openAddEmail}
              className='flex items-center cursor-pointer rounded lg:w-max lg:px-4 border mt-6 border-solid border-custom-zinc-300 py-2 justify-center'
            >
              <AddEmail />
              <span className='ml-2 lg:hidden'>{t('profile.add')}</span>
              <span className='ml-2 hidden lg:block whitespace-nowrap px-3'>
                {t('profile.addNewEmail')}
              </span>
            </div>
          </div>
        </div>
      </div>
      {query.mode === 'add-email' && (
        <div className='max-w-[62.5rem] lg:max-w-[39rem] w-full rounded-xl absolute lg:z-[3] lg:bg-custom-neutral-900 lg:pl-12 top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 lg:top-52'>
          <FormProvider {...form}>
            <ProfileInputMobile
              addEmail={addEmailHandler}
              onAddEmailClose={closeAddEmail}
              checkInput={checkEmailHandler}
              onClose={closeAddEmail}
              errors={errors}
              options={emailOptions}
              label={t('profile.addNewEmail')}
              name='email'
              cancel={t('profile.cancel')}
              add={t('profile.add')}
            />
          </FormProvider>
        </div>
      )}
    </GoogleProfile>
  );
};

export default UserProfile;
