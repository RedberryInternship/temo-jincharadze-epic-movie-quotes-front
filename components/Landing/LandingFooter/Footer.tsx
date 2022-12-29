import { useFooter } from 'components';

const Footer = () => {
  const { t } = useFooter();

  return (
    <div className='bg-footer-gradient h-8 md:h-12 w-full text-custom-orange-200 text-[0.5rem] md:text-xs pl-[2.125rem] md:pl-[4.375rem] flex items-center uppercase font-medium'>
      © 2022 MOVIE QUOTES. {t('landing.copyright')}
    </div>
  );
};

export default Footer;
