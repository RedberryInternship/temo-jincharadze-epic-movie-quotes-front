import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useVerifySecondaryEmail } from 'hooks';

const Index = () => {
  useVerifySecondaryEmail();
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['notification'])),
    },
  };
};
