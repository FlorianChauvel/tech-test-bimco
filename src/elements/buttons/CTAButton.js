import styled from '@emotion/styled';
import { COLORS } from '../../styles';
import BasicButton from './BasicButton';

const CTAButton = styled(BasicButton)({
    fontWeight: 500,
    color: COLORS.CTA_TEXT,
    backgroundColor: COLORS.CTA_BACKGROUND,
    ' &:hover': {
        color: COLORS.CTA_TEXT_HOVERED,
        backgroundColor: COLORS.CTA_BACKGROUND_HOVERED,
    },
});

export default CTAButton;