import React from 'react';
import styled from '@emotion/styled';

import screenSmall from '../../assets/Screen_Small.png';

const Img = styled.img({
    width: '90%',
    margin: '50px auto',
});

const Right = () => <Img src={screenSmall} />;

export default Right;