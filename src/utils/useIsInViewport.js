import { useState, useEffect } from 'react';

const isElementVisible = (rect) => (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);

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
    }, [nodeElement]);

    return [isInViewport];
};

export default useIsInViewport;