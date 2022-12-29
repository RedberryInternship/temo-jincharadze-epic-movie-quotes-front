import { useEffect, useRef, useState } from 'react';

const useLanguageSelector = () => {
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

  return { toggle, toggleClickHandler, refEl };
};

export default useLanguageSelector;
