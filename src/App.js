import React from 'react';
import styled from '@emotion/styled';

import BasicButton from './elements/buttons/BasicButton';
import CTAButton from './elements/buttons/CTAButton';

import './index.css';

const Container = styled.div({
  width: '80%',
  margin: 'auto',
});

const Header = styled.header({
  marginTop: '80px',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
});

const SubHeader = styled.div({
  display: 'inline-block',
});

function App() {
  return (
    <Container>
      <Header>
        <SubHeader>
          <BasicButton>Explorer Onfly</BasicButton>
          <BasicButton>Découvrez nos services</BasicButton>
          <BasicButton>Ressources</BasicButton>
          <BasicButton>Blog</BasicButton>
          <BasicButton>Bim & Co</BasicButton>
        </SubHeader>
        <SubHeader>
          <CTAButton>Connectez vous à Onfly</CTAButton>
        </SubHeader>
      </Header>
    </Container>
  );
}

export default App;
