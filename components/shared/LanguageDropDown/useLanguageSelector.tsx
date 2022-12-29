import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const useLanguageSelector = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const { language } = i18n;
  const router = useRouter();
  const { pathname } = router;

  const refEl = useRef<HTMLDivElement>(null);

  const toggleClickHandler = () => {
    setToggle((prev) => !prev);
  };

  const localeHandler = (newLocale: string) => {
    const currentUrl = pathname;
    router.replace(currentUrl, currentUrl, { locale: newLocale });
    setToggle(false);
  };

  useEffect(() => {
    const toggleBlurHandler = (event: MouseEvent) => {
      if (refEl.current && !refEl.current.contains(event.target as Node)) {
        setToggle(false);
      }
    };

    document.addEventListener('click', toggleBlurHandler, true);
    return () => document.removeEventListener('click', toggleBlurHandler, true);
  }, []);

  return {
    toggle,
    toggleClickHandler,
    refEl,
    language,
    localeHandler,
  };
};

export default useLanguageSelector;
