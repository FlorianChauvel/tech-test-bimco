import React from 'react';
import styled from '@emotion/styled';

import ShadowSection from '../../elements/sections/ShadowSection';
import TwoColumnsWithFooter from '../../layouts/TwoColumnsWithFooter';
import Left from './Left';
import Right from './Right';
import Footer from './Footer';

import formeBleu from '../../assets/Forme_Bleu.svg';

const Wrapper = styled.div({
    position: 'relative',
    height: '100px',
    width: '2000px',
    overflowY: 'visible',
    overflowX: 'visible',
})
const FormeBleu = styled.img({
    position: 'relative',
    zIndex: -1,
    top: '-430px',
    left: '-300px',
});

const Standardize = () => (
    <>
        <ShadowSection>
            <TwoColumnsWithFooter
                left={<Left />}
                right={<Right />}
                footer={<Footer />}
            />
        </ShadowSection>
        <Wrapper><FormeBleu src={formeBleu} /></Wrapper>
    </>
);

export default Standardize;