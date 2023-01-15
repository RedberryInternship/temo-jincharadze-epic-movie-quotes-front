import { useFooter } from 'components';

const Footer = () => {
  const { t } = useFooter();

  return (
    <div className='bg-footer-gradient h-8  relative z-[3] md:h-12 w-full text-custom-orange-200 text-s  md:text-xs pl-8 md:pl-[4.4rem] flex items-center uppercase font-medium'>
      © 2022 MOVIE QUOTES. {t('landing.copyright')}
    </div>
  );
};

export default Footer;
