import React from 'react';
import styled from '@emotion/styled';

import screenLarge from '../../assets/Screen_Large.png';

const Img = styled.img({
    width: '100%',
});

const Right = () => <Img src={screenLarge} />;

export default Right;