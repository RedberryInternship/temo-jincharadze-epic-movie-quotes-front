import { Ghost } from 'components';
import { useNotificationLang } from 'hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Link from 'next/link';

const Index = () => {
  const { t } = useNotificationLang();
  return (
    <div className='bg-top-gradient h-screen w-full flex flex-col justify-center items-center'>
      <Ghost />
      <h2 className='text-2xl text-white font-bold mt-9 md:text-47'>
        {t('notFound.title')}
      </h2>
      <p className='text-base md:text-2xl font-medium text-center text-white mt-4 max-w-[18.5rem] md:max-w-none'>
        {t('notFound.description')}
      </p>
      <Link href='/' className='mt-8'>
        <div className='w-[9.4rem] h-10 md:h-12 text-base md:text-xl bg-custom-red-600 hover:bg-custom-red-700 flex items-center justify-center text-white rounded font-normal '>
          {t('notFound.btn')}
        </div>
      </Link>
    </div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['notification'])),
    },
  };
};
