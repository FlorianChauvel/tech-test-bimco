import React from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Advantages from './components/Advantages';
import Standardize from './components/Standardize/';
import Faster from './components/Faster/';

const OuterContainer = styled.div({
  overflow: 'hidden',
  position: 'relative',
  width: '100%'
});

const InnerContainer = styled.div({
  width: '90%',
  maxWidth: '1080px',
  margin: '0 auto',
});

function App() {
  return (
    <OuterContainer>
      <InnerContainer>
        <Header />
        <Advantages />
        <Standardize />
        <Faster />
      </InnerContainer>
    </OuterContainer>
  );
}

export default App;
