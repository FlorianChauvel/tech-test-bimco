import React from 'react';
import styled from '@emotion/styled';

import BasicButton from '../elements/buttons/BasicButton';
import CTAButton from '../elements/buttons/CTAButton';
import { NAVBAR_BUTTONS } from '../constants';

const Container = styled.header({
  marginTop: '80px',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
});

const SubHeader = styled.div({
  display: 'inline-block',
});

const Header = ({ activeButton, setActiveButton }) => (
    <Container>
        <SubHeader>
            <BasicButton
              active={activeButton === NAVBAR_BUTTONS.EXPLORE}
              onClick={() => setActiveButton(NAVBAR_BUTTONS.EXPLORE)}
            >
              Explorer Onfly
            </BasicButton>
            
            <BasicButton
              active={activeButton === NAVBAR_BUTTONS.DISCOVER}
              onClick={() => setActiveButton(NAVBAR_BUTTONS.DISCOVER)}
            >
              Découvrez nos services
            </BasicButton>
            
            <BasicButton
              active={activeButton === NAVBAR_BUTTONS.RESOURCES}
              onClick={() => setActiveButton(NAVBAR_BUTTONS.RESOURCES)}
            >
              Ressources
            </BasicButton>
            
            <BasicButton
              active={activeButton === NAVBAR_BUTTONS.BLOG}
              onClick={() => setActiveButton(NAVBAR_BUTTONS.BLOG)}
            >
              Blog
            </BasicButton>
            
            <BasicButton
              active={activeButton === NAVBAR_BUTTONS.BIM_CO}
              onClick={() => setActiveButton(NAVBAR_BUTTONS.BIM_CO)}
            >
              Bim & Co
            </BasicButton>
        </SubHeader>
        <SubHeader>
            <CTAButton>Connectez vous à Onfly</CTAButton>
        </SubHeader>
    </Container>
);

export default Header;
