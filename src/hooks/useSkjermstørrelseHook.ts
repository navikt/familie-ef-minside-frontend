import { useEffect, useState } from 'react';
import { desktop } from '../utils/constants';

export const useSkjermstørrelseHook = () => {
    const [erLitenSkjerm, setErLitenSkjerm] = useState<boolean>(window.innerWidth < desktop);

    useEffect(() => {
        function handleWindowSizeChange() {
            setErLitenSkjerm(window.innerWidth < desktop);
        }

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return { erLitenSkjerm };
};
