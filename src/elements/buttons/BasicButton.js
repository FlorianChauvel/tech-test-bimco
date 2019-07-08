import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONT_SIZES } from '../../styles';

const BasicButton = styled.button({
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    display: 'inline-block',
    color: COLORS.BUTTON_TEXT,
    backgroundColor: COLORS.BUTTON_BACKGROUND,
    transition: 'color .5s, background-color .5s',
    ' &:hover': {
        color: COLORS.BUTTON_TEXT_HOVERED,
        backgroundColor: COLORS.BUTTON_BACKGROUND_HOVERED,
    },
    fontSize: FONT_SIZES.BUTTON,
});

export default BasicButton;