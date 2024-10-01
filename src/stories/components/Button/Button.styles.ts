import styled, { css, keyframes } from 'styled-components';
import {
  setBackgroundColor,
  setTextColor,
  setBorderColor,
  setDisabledBackgroundColor,
} from './Button.helpers';

import type { ButtonHelperParams as StyledProps} from './Button.types'

const buttonCommonStyle = css<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 12px;
  background-color: ${({ variant }) =>
    setBackgroundColor({variant })};

  border-width: 2px;
  border-style: solid;
  border-color: ${({  variant }) =>
    setBorderColor({  variant })};
  cursor: pointer;
  &:hover {
      filter: brightness(0.75); 
  }
  &:disabled {
    background-color: ${({ variant }) =>
      setDisabledBackgroundColor({  variant })};
    color: white;
    cursor: not-allowed;
  }

`;

export const StyledButton = styled.button<StyledProps>`
  color: ${({ variant }) =>
    setTextColor({ variant })};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 1rem ;
  font-size: ${({ size }) => (size ?? '1rem')};
  white-space: nowrap;
  ${buttonCommonStyle}
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Animation = styled.div<{ size: number }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  transform-origin: center;
`;
