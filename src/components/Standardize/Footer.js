import React from 'react';
import styled from '@emotion/styled';

import CTAButton from '../../elements/buttons/CTAButton';

const Container = styled.div({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'middle',
    marginTop: '35px',
});

const Footer = () => (
    <Container>
        <CTAButton>Découvrez les fonctionnalités d'Onfly en phase programmation</CTAButton>
    </Container>
);

export default Footer;