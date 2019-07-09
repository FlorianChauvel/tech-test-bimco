import React, { useRef } from 'react';

import BasicSection from '../../elements/sections/BasicSection';
import TwoColumnsWithFooter from '../../layouts/TwoColumnsWithFooter';
import FadingFromBottom from '../../elements/containers/FadingFromBottom';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

import useIsInViewport from '../../utils/useIsInViewport';

const Standardize = () => {
    const sectionEl = useRef(null);
    const [isInViewport] = useIsInViewport(sectionEl);
    return (
        <FadingFromBottom isVisible={isInViewport}>
            <BasicSection ref={sectionEl}>
                <TwoColumnsWithFooter
                    left={<Left />}
                    right={<Right />}
                    footer={<Footer />}
                />
            </BasicSection>
        </FadingFromBottom>
    );
};

export default Standardize;