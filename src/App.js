import React from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Advantages from './components/Advantages';
import Standardize from './components/Standardize/';
import Faster from './components/Faster/';
import BlueShape from './components/BlueShape';
import GreyShape from './components/GreyShape';

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
        <GreyShape />
        <Standardize />
        <Faster />
        <BlueShape />
      </InnerContainer>
    </OuterContainer>
  );
}

export default App;
