import React from 'react';
import styled from '@emotion/styled';

import { COLORS, FONT_SIZES } from '../../styles';

const Container = styled.div({
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    height: '100%',
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
        <Title>Gagner du temps sur les projets</Title>
        <Text>
        Les objets BIM sont une perte de temps importante
        sur les projets. Gérer vos objets BIM dans une bibliothèque privée vous permet un retour sur investissement significatif. 
        Onfly vous permet de rationaliser la création de familles, le processus d'approbation, la catégorisation, 
        l'édition et le déploiement. Les modeleurs ont facilement accès à des objets contrôlés. 
        Les experts ou ingénieurs peuvent sans passer par Revit spécifier les équipements.<br/><br/>
        <strong>Le BIM manager passe moins de temps à contrôler la maquette.</strong>
        </Text>
    </Container>
);

export default Left;