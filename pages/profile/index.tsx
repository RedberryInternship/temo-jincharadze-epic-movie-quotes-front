import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { GoogleProfile, UserProfile } from 'components';
import { useProfile } from 'hooks';

const Index = () => {
  const { google_id } = useProfile();
  return google_id ? <GoogleProfile /> : <UserProfile />;
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
