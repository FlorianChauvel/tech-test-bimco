import React from 'react';
import styled from '@emotion/styled';

import BasicSection from '../../elements/sections/BasicSection';
import TwoColumnsWithFooter from '../../layouts/TwoColumnsWithFooter';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

import formeGris from '../../assets/Forme_Gris.svg';

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
        <BasicSection>
            <TwoColumnsWithFooter
                left={<Left />}
                right={<Right />}
                footer={<Footer />}
            />
        </BasicSection>
    </>
);

export default Standardize;