import React from 'react';
import BasicButton from './elements/buttons/BasicButton';
import CTAButton from './elements/buttons/CTAButton';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <BasicButton>Basic</BasicButton>
      <CTAButton>CTA</CTAButton>
    </div>
  );
}

export default App;
