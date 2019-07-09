import React, { useRef } from 'react';
import useIsInViewport from '../utils/useIsInViewport';
import styled from '@emotion/styled';

import greyShape from '../assets/Forme_Gris.svg';
import FadingFromLeft from '../elements/containers/FadingFromLeft';

const Wrapper = styled(FadingFromLeft)({
    position: 'relative',
    zIndex: -1,
});
const Img = styled.img({
    position: 'absolute',
    left: -500,
    top: -300,
});

const GreyShape = () => {
    const ref = useRef(null);
    const [isInViewport] = useIsInViewport(ref);

    return (
        <Wrapper isVisible={isInViewport}>
            <Img src={greyShape} ref={ref} />
        </Wrapper>
    );
};

export default GreyShape;