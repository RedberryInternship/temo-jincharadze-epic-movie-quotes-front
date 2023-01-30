import { AllMovies } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const Index = () => {
  return <AllMovies />;
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'notification',
      ])),
    },
  };
};
