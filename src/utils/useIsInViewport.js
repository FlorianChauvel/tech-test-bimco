import { useState, useEffect } from 'react';

export const isElementVisible = (rect) => {
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
};

const useIsInViewport = (nodeElement) => {
    const [isInViewport, setIsInViewport] = useState(false);

    const handleScroll = () => {
        if (!nodeElement || !nodeElement.current) {
            return;
        }
        const rect = nodeElement.current.getBoundingClientRect();
        const isVisible = isElementVisible(rect);
        setIsInViewport(isVisible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return [isInViewport];
};

export default useIsInViewport;