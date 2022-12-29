import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';

const useLanguageSelector = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const [toggle, setToggle] = useState<boolean>(false);
  const refEl = useRef<HTMLDivElement>(null);

  const toggleClickHandler = () => {
    setToggle((prev) => !prev);
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

  return { toggle, toggleClickHandler, refEl, language };
};

export default useLanguageSelector;
