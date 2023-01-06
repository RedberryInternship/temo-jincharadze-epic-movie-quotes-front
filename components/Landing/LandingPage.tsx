import {
  Footer,
  LandingMovie,
  LandingHeader,
  useLandingPage,
  Button,
  FormWrapper,
  Modal,
  LogIn,
  ForgotPassword,
  SignUp,
  EmailVerification,
  EmailVerified,
} from 'components';

const LandingPage = () => {
  const {
    t,
    closeModalHandler,
    modalForm,
    onSignUpHandler,
    onLoginHandler,
    onForgotPasswordHandler,
  } = useLandingPage();

  return (
    <>
      {modalForm.isOpen && (
        <Modal onClose={closeModalHandler}>
          {modalForm.value === 'signUp' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[44rem] md:w-[37.5rem]'
            >
              <SignUp onLoginClick={onLoginHandler} />
            </FormWrapper>
          )}
          {modalForm.value === 'emailSent' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[26rem] md:w-[33.5rem]'
            >
              <EmailVerification />
            </FormWrapper>
          )}
          {modalForm.value === 'accountVerified' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[26rem] md:w-[33.5rem]'
            >
              <EmailVerified />
            </FormWrapper>
          )}
          {modalForm.value === 'login' && (
            <FormWrapper
              onClose={closeModalHandler}
              className='md:h-[40rem] md:w-[40rem]'
            >
              <LogIn
                onSignUpClick={onSignUpHandler}
                onForgotPassword={onForgotPasswordHandler}
              />
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

      <div className='bg-starting-gradient absolute z-[2] top-0 w-screen h-screen' />
      <LandingHeader
        onSignUpClick={onSignUpHandler}
        onLoginClick={onLoginHandler}
      />
      <div className='h-[30.3125rem] md:h-[50.5rem]  bg-top-gradient w-full flex justify-center items-center flex-col'>
        <h1 className='text-custom-orange-200 text-2xl md:text-6xl  text-center relative z-[3] leading-9 md:leading-[5.6rem] font-bold max-w-[20rem] md:max-w-[50rem]'>
          {t('landing.about')}
        </h1>
        <Button
          className='px-[0.9rem] md:px-4 py-[0.4rem] md:py-[0.5rem] bg-custom-red-600 hover:bg-custom-red-700 rounded mt-8 relative z-[3] md:text-xl'
          onClick={onSignUpHandler}
        >
          {t('landing.getStarted')}
        </Button>
      </div>
      <LandingMovie
        width='max-w-[25rem] md:max-w-4xl'
        image='bg-interstellar'
        movie={t('landing.interstellarMovie.name')}
        quote={t('landing.interstellarMovie.quote')}
      />
      <LandingMovie
        width='max-w-[17rem] md:max-w-[62rem]'
        image='bg-royal'
        movie={t('landing.theRoyalTenenbaums.name')}
        quote={t('landing.theRoyalTenenbaums.quote')}
      />
      <LandingMovie
        width='max-w-[18rem] md:max-w-[62rem]'
        image='bg-lord'
        movie={t('landing.theLordOfTheRings.name')}
        quote={t('landing.theLordOfTheRings.quote')}
      />

      <Footer />
    </>
  );
};

export default LandingPage;
