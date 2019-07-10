import React, { useRef } from 'react';
import useIsInViewport from '../utils/useIsInViewport';
import styled from '@emotion/styled';

import blueShape from '../assets/Forme_Bleu.svg';
import FadingFromRight from '../elements/containers/FadingFromRight';

const Wrapper = styled(FadingFromRight)({
    position: 'relative',
    zIndex: -1,
});
const Img = styled.img({
    position: 'absolute',
    top: -500,
});

const BlueShape = () => {
    const ref = useRef(null);
    const [isInViewport] = useIsInViewport(ref);

    return (
        <Wrapper isVisible={isInViewport} opacityMs={2000} slideMs={2000}>
            <Img src={blueShape} ref={ref} />
        </Wrapper>
    );
};

export default BlueShape;