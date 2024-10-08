import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinnerWrapper = styled.div`
  display: inline-block;
  width: fit-content;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  transform-origin: center;
  font-size: 0;
  height: 16px;
  width: 16px;
`;
