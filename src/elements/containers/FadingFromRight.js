import React from 'react';
import { keyframes } from '@emotion/core';

import BaseFading from './BaseFading';

const fadeIn = keyframes`
    from {
        transform: translateX(0);
        opacity: 0;
    }

    1% {
        transform: translateX(100px);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const FadingFromRight = ({ children, ...otherProps }) => (
    <BaseFading
        animation={fadeIn}
        {...otherProps}
    >
        {children}
    </BaseFading>
);

export default FadingFromRight;