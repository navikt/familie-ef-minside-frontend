import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    // biome-ignore lint/correctness/useExhaustiveDependencies: Scroll to top whenever the route pathname changes.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
