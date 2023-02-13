import {
  Footer,
  LandingMovie,
  LandingHeader,
  useLandingPage,
  Button,
  FormWrapper,
  Modal,
  ForgotPassword,
  SignUp,
  EmailVerification,
  EmailVerified,
  EmailAlreadyVerified,
  PasswordVerification,
  PasswordVerified,
  CreatePassword,
  Login,
} from 'components';
import Link from 'next/link';

const LandingPage = () => {
  const {
    t,
    closeModalHandler,
    modalForm,
    type,
    onSignUpHandler,
    onLoginHandler,
    onForgotPasswordHandler,
  } = useLandingPage();

  return (
    <>
      {type === 'login' && (
        <>
          <Link
            onClick={closeModalHandler}
            href='/'
            className='fixed top-0 left-0 w-full h-screen z-[5] bg-blur-bg backdrop-blur-sm'
          />
          <FormWrapper
            onClose={closeModalHandler}
            className='md:h-[40rem] md:w-[40rem]'
          >
            <Login
              onSignUpClick={onSignUpHandler}
              onForgotPassword={onForgotPasswordHandler}
            />
          </FormWrapper>
        </>
      )}
      {type === 'register' && (
        <>
          <Link
            onClick={closeModalHandler}
            href='/'
            className='fixed top-0 left-0 w-full h-screen z-[5] bg-blur-bg backdrop-blur-sm'
          />
          <FormWrapper
            onClose={closeModalHandler}
            className='md:h-[44rem] md:w-[37.5rem]'
          >
            <SignUp onLoginClick={onLoginHandler} />
          </FormWrapper>
        </>
      )}

      {modalForm.isOpen && (
        <Modal onClose={closeModalHandler} mode='mobile modal'>
          {modalForm.value === 'email sent' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[26rem] md:w-[33.5rem] pt-[4.5rem] pb-[6.5rem] rounded-xl md:pb-0 md:pt-0 left-1/2 -translate-x-1/2 top-20'
              mode='mobile modal'
            >
              <EmailVerification />
            </FormWrapper>
          )}
          {modalForm.value === 'accountVerified' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[26rem] md:w-[33.5rem] pt-[4.5rem] pb-[6.5rem] rounded-xl md:pb-0 md:pt-0 left-1/2 -translate-x-1/2 top-20'
              mode='mobile modal'
            >
              <EmailVerified />
            </FormWrapper>
          )}

          {modalForm.value === 'accountAlreadyVerified' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[26rem] md:w-[33.5rem] pt-[4.5rem] pb-[6.5rem] rounded-xl md:pb-0 md:pt-0 left-1/2 -translate-x-1/2 top-20'
              mode='mobile modal'
            >
              <EmailAlreadyVerified />
            </FormWrapper>
          )}

          {modalForm.value === 'password reset sent' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[26rem] md:w-[33.5rem] pt-8 pb-6 rounded-xl md:pb-0 md:pt-0 left-1/2 -translate-x-1/2 top-20 px-0 lg:px-4'
              mode='mobile modal'
            >
              <PasswordVerification mode='password sent' />
            </FormWrapper>
          )}

          {modalForm.value === 'show create password' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[31rem] md:w-[33.5rem]'
            >
              <CreatePassword />
            </FormWrapper>
          )}

          {modalForm.value === 'password changed' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[26rem] md:w-[33.5rem] pt-8 pb-16 rounded-xl md:pb-0 md:pt-0 left-1/2 -translate-x-1/2 top-20 px-0 lg:px-4'
              mode='mobile modal'
            >
              <PasswordVerified mode='password verified' />
            </FormWrapper>
          )}

          {modalForm.value === 'forgotPassword' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:w-[37.5rem] md:h-[25.1rem]'
            >
              <ForgotPassword backToLoginClick={onLoginHandler} />
            </FormWrapper>
          )}
        </Modal>
      )}

      <div className='bg-starting-gradient absolute z-[2] top-0 h-screen w-full' />
      <LandingHeader
        onSignUpClick={onSignUpHandler}
        onLoginClick={onLoginHandler}
      />
      <div className='h-[30.3125rem] md:h-[50.5rem]  bg-top-gradient w-full flex justify-center items-center flex-col'>
        <h1 className='text-custom-orange-200 text-2xl md:text-6xl  text-center relative z-[3] leading-9 md:leading-[5.6rem] font-bold max-w-[17rem] md:max-w-[42rem]'>
          {t('landing.about')}
        </h1>
        <Button
          className='px-[0.9rem] md:px-4 py-[0.4rem] md:py-[0.5rem] bg-custom-red-600 hover:bg-custom-red-700 rounded mt-8 relative z-[3] text-base  md:text-xl'
          onClick={onSignUpHandler}
        >
          {t('landing.getStarted')}
        </Button>
      </div>
      <LandingMovie
        wrapperClass='sticky top-0'
        width='max-w-[19rem] md:max-w-3xl'
        image='bg-interstellar'
        movie={t('landing.interstellarMovie.name')}
        quote={t('landing.interstellarMovie.quote')}
      />
      <LandingMovie
        width='max-w-[17rem] md:max-w-[62rem]'
        image='bg-royal bg-fixed'
        movie={t('landing.theRoyalTenenbaums.name')}
        quote={t('landing.theRoyalTenenbaums.quote')}
      />
      <LandingMovie
        width='max-w-[18rem] md:max-w-[62rem]'
        image='bg-lord bg-fixed'
        movie={t('landing.theLordOfTheRings.name')}
        quote={t('landing.theLordOfTheRings.quote')}
      />

      <Footer />
    </>
  );
};

export default LandingPage;
