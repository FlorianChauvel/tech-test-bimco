import React from 'react';
import styled from '@emotion/styled';

import ShadowSection from '../../elements/sections/ShadowSection';
import TwoColumnsWithFooter from '../../layouts/TwoColumnsWithFooter';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

const Section = styled(ShadowSection)({
    marginTop: '100px',
});

const Standardize = () => (
    <Section>
        <TwoColumnsWithFooter
            left={<Left />}
            right={<Right />}
            footer={<Footer />}
        />
    </Section>
);

export default Standardize;