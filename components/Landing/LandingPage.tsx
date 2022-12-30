import {
  Footer,
  LandingMovie,
  LandingHeader,
  useLandingPage,
  Button,
  FormWrapper,
  Modal,
  LogIn,
} from 'components';
import { SignUp } from './LandingHeader/SignUp';

const LandingPage = () => {
  const {
    t,
    closeModalHandler,
    showModal,
    modalForm,
    onSignUpHandler,
    onLoginHandler,
  } = useLandingPage();

  return (
    <>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <FormWrapper onClose={closeModalHandler}>
            {modalForm === 'signUp' && <SignUp />}
            {modalForm === 'login' && <LogIn />}
          </FormWrapper>
        </Modal>
      )}

      <div className='bg-starting-gradient absolute z-[2] top-0 w-screen h-screen' />
      <LandingHeader
        onSignUpClick={onSignUpHandler}
        onLoginClick={onLoginHandler}
      />
      <div className='h-[30.3125rem] md:h-[50.5rem]  bg-top-gradient w-full flex justify-center items-center flex-col'>
        <h1 className='text-custom-orange-200 text-2xl md:text-6xl  text-center relative z-[3] leading-9 md:leading-[5.6rem] font-bold max-w-[17rem] md:max-w-[44rem]'>
          {t('landing.about')}
        </h1>
        <Button className='px-[0.9rem] md:px-4 py-[0.4rem] md:py-[0.5rem] bg-custom-red-600 rounded mt-8 relative z-[3] md:text-xl'>
          {t('landing.getStarted')}
        </Button>
      </div>
      <LandingMovie
        width='max-w-[19rem] md:max-w-3xl'
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
