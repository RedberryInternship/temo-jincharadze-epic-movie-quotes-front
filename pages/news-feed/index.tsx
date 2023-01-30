import { AllQuotes } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const Index = () => {
  return <AllQuotes />;
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
