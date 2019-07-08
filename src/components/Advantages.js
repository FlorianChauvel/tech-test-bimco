import React from 'react';
import styled from '@emotion/styled';

import ShadowSection from '../elements/sections/ShadowSection';

import schema from '../assets/Schema.svg';
import { FONT_WEIGHTS, COLORS, FONT_SIZES } from '../styles';

const Container = styled.div({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-evenly',
    paddingTop: '80px',
    paddingBottom: '80px',
});

const Column = styled.div({
    width: '33%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '30px',
});

const Img = styled.img({
    width: '33%',
    height: '33%',
});

const Text = styled.span({
    fontSize: FONT_SIZES.TEXT,
    fontWeight: FONT_WEIGHTS.BOLD,
    marginLeft: '20px',
    marginRight: '20px',
    color: COLORS.TEXT,
})

const Advantages = () => (
    <ShadowSection>
        <Container>
            <Column>
                <Text>Automatisez les mises à jour de vos maquettes jusqu'au DOE</Text>
                <Text>Fluidifier les échanges avec vos fournisseurs et vos partenaires</Text>
            </Column>
            <Img src={schema} />
            <Column>
                <Text>Standardiser vos pratiques</Text>
                <Text>Gagner du temps sur vos projets</Text>
            </Column>
        </Container>
    </ShadowSection>
);

export default Advantages;