import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import Advantages from './components/Advantages';
import Standardize from './components/Standardize/';
import Faster from './components/Faster/';
import BlueShape from './components/BlueShape';
import GreyShape from './components/GreyShape';
import { NAVBAR_BUTTONS } from './constants';

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
  const [activeButton, setActiveButton] = useState(NAVBAR_BUTTONS.EXPLORE);
  return (
    <OuterContainer>
      <InnerContainer>
        <Header
          activeButton={activeButton}
          setActiveButton={(button) => setActiveButton(button)}
        />
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
