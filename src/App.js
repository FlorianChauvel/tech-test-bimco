import React from 'react';
import styled from '@emotion/styled';

import Header from './Header';

const Container = styled.div({
  width: '80%',
  margin: 'auto',
});

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
