import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONT_SIZES } from '../../styles';
import BasicButton from './BasicButton';

const CTAButton = styled(BasicButton)({
    color: COLORS.CTA_TEXT,
    backgroundColor: COLORS.CTA_BACKGROUND,
    ' &:hover': {
        color: COLORS.CTA_TEXT_HOVERED,
        backgroundColor: COLORS.CTA_BACKGROUND_HOVERED,
    },
});

export default CTAButton;