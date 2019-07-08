import React from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Advantages from './components/Advantages';
import Standardize from './components/Standardize/';
import Faster from './components/Faster/';

const Container = styled.div({
  width: '90%',
  maxWidth: '1080px',
  margin: '0 auto 100px auto',
});

function App() {
  return (
    <Container>
      <Header />
      <Advantages />
      <Standardize />
      <Faster />
    </Container>
  );
}

export default App;
