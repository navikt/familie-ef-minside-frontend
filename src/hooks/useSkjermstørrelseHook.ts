import { useEffect, useState } from 'react';
import { desktop } from '../utils/constants';

export const useSkjermstørrelseHook = () => {
  const [erLitenSkjerm, setErLitenSkjerm] = useState<boolean>(window.innerWidth < desktop);

  function handleWindowSizeChange() {
    setErLitenSkjerm(window.innerWidth < desktop);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return { erLitenSkjerm };
};
