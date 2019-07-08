import React from 'react';
import styled from '@emotion/styled';

import BasicSection from '../../elements/sections/BasicSection';
import TwoColumnsWithFooter from '../../layouts/TwoColumnsWithFooter';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

import formeGris from '../../assets/Forme_Gris.svg';

const Section = styled(BasicSection)({
    marginTop: '250px',
});

const FormeGris = styled.img({
    position: 'absolute',
    zIndex: -1,
    top: '600px',
    left: '-100px',
    overflow: 'hidden',
});

const Standardize = () => (
    <>
        <FormeGris src={formeGris} />
        <Section>
            <TwoColumnsWithFooter
                left={<Left />}
                right={<Right />}
                footer={<Footer />}
            />
        </Section>
    </>
);

export default Standardize;