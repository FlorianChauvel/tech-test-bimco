import React from 'react';
import { keyframes } from '@emotion/core';

import BaseFading from './BaseFading';

const fadeIn = keyframes`
    from {
        transform: translateY(0);
        opacity: 0;
    }

    1% {
        transform: translateY(100px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const FadingFromBottom = ({ children, ...otherProps }) => (
    <BaseFading
        animation={fadeIn}
        {...otherProps}
    >
        {children}
    </BaseFading>
);

export default FadingFromBottom;