import styled from '@emotion/styled';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../styles';

const BasicButton = styled.button(
({ active }) =>    
({
    border: active ? `1px solid ${COLORS.BUTTON_TEXT_HOVERED}` : '1px solid white',
    borderRadius: '4px',
    padding: '10px 20px',
    display: 'inline-block',
    fontWeight: FONT_WEIGHTS.BOLD,
    color: active ? COLORS.BUTTON_TEXT_HOVERED : COLORS.TEXT,
    backgroundColor: active ? COLORS.BUTTON_BACKGROUND_HOVERED : COLORS.BUTTON_BACKGROUND,
    transition: 'color .5s, background-color .5s',
    ' &:hover': {
        color: COLORS.BUTTON_TEXT_HOVERED,
        backgroundColor: COLORS.BUTTON_BACKGROUND_HOVERED,
    },
    fontSize: FONT_SIZES.TEXT,
    cursor: 'pointer',
    outline: 'none',
}));

export default BasicButton;