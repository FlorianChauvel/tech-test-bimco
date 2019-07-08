import React from 'react';
import styled from '@emotion/styled';

import Header from './Header';
import ShadowSection from './elements/sections/ShadowSection';
import BasicSection from './elements/sections/BasicSection';

const Container = styled.div({
  width: '80%',
  margin: 'auto',
});

function App() {
  return (
    <Container>
      <Header />
      <ShadowSection>Hi</ShadowSection>
      <BasicSection>Hi again</BasicSection>
      <ShadowSection>Still there?</ShadowSection>
    </Container>
  );
}

export default App;
