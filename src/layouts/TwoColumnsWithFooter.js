import React from 'react';
import styled from '@emotion/styled';

const OuterContainer = styled.div({
    display: 'flex',
    flexFlow: 'column nowrap',
});

const InnerContainer = styled.div({
    display: 'flex',
    flexFlow: 'row nowrap',
});

const Column = styled.div({
    width: '50%',
});

const TwoColumnsWithFooter = ({ left, right, footer }) => (
    <OuterContainer>
        <InnerContainer>
            <Column>{left}</Column>
            <Column>{right}</Column>
        </InnerContainer>
        <div>{footer}</div>
    </OuterContainer>
);

export default TwoColumnsWithFooter;