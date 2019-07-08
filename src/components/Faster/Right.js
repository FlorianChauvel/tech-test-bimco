import React from 'react';
import styled from '@emotion/styled';

import backImage from '../../assets/Screen_1.png';
import frontImage from '../../assets/Screen_2.png';

const OuterContainer = styled.div({
    position: 'relative',
    marginBottom: '20px',
});

const InnerContainer = styled.div({
    position: 'absolute',
    width: '50%',
    top: '25%',
    left: '45%',
})

const BackImage = styled.img({
    width: '80%',
    marginTop: '35px',
    marginLeft: '35px',
    display: 'inline-block',
    zIndex: 1,
});

const FrontImage = styled.img({
    zIndex: 2,
    width: '100%',
});

const Right = () => (
    <OuterContainer>
        <BackImage src={backImage} />
        <InnerContainer>
            <FrontImage src={frontImage} />
        </InnerContainer>
    </OuterContainer>
);

export default Right;