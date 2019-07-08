import React from 'react';
import styled from '@emotion/styled';

import BasicSection from '../../elements/sections/BasicSection';
import TwoColumnsWithFooter from '../../layouts/TwoColumnsWithFooter';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

const Section = styled(BasicSection)({
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