import React from 'react';
import { LandingPage } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const Home = () => {
  return <LandingPage />;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale!, ['common'])) } };
};
