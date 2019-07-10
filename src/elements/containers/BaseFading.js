import styled from '@emotion/styled';

const BaseFading = styled.div(
    ({ isVisible, animation, opacityMs, slideMs }) => 
    ({
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${opacityMs / 1000}s ease`,
        animation: isVisible ? `${animation} ${slideMs / 1000}s ease` : '',
    })
);

export default BaseFading;