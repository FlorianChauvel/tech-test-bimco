import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const fadeIn = keyframes`
    from {
        transform: translateX(0);
        opacity: 0;
    }

    1% {
        transform: translateX(-100px);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const FadingFromLeft = styled.div(
    ({ isVisible }) => 
    ({
        opacity: isVisible ? 1 : 0,
        transition: 'opacity .75s ease',
        animation: isVisible ? `${fadeIn} .75s ease` : '',
    })
);

export default FadingFromLeft;