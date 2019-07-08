import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONT_SIZES } from '../../styles';

const Container = styled.div({
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    height: '100%'
});

const Title = styled.h2({
    color: COLORS.TEXT,
    fontSize: FONT_SIZES.TITLE,
});

const Text = styled.p({
    color: COLORS.TEXT,
    fontSize: FONT_SIZES.TEXT,
});

const Left = () => (
    <Container>
        <Title>Standardiser vos pratiques</Title>
        <Text>
            Onfly vous donne les outils pour garantir la
            convention BIM de vos projets.<br />
            Mettez en place un référentiel technique,
            définissant vos exigences en terme de paramètres et
            de classification. Connectez votre référentiel à votre bibliothèque d'objets ou 
            à celle de vos partenaires
            grâce à des conventions de nommages.<br/><br/>
            <strong>Créez vos standards pour différentes typologies de projets ou marchés.</strong>
        </Text>
    </Container>
);

export default Left;