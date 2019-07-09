import React, { useRef } from 'react';
import styled from '@emotion/styled';

import useIsInViewport from '../../utils/useIsInViewport';
import ShadowSection from '../../elements/sections/ShadowSection';
import TwoColumnsWithFooter from '../../layouts/TwoColumnsWithFooter';
import FadingFromBottom from '../../elements/containers/FadingFromBottom';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

const FadingFromBottomWithMargin = styled(FadingFromBottom)({
    marginBottom: '100px',
});

const Faster = () => {
    const sectionEl = useRef(null); 
    const [isInViewPort] = useIsInViewport(sectionEl);

    return (
        <FadingFromBottomWithMargin isVisible={isInViewPort}>
            <ShadowSection ref={sectionEl}>
                <TwoColumnsWithFooter
                    left={<Left />}
                    right={<Right />}
                    footer={<Footer />}
                />
            </ShadowSection>
        </FadingFromBottomWithMargin>
    );
};

export default Faster;