import styled from 'styled-components';

export const StyledRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  background: #c1c4c5;
  padding: 16px;
  align-items: baseline;
`;

export const StyledColumnWrapper = styled(StyledRowWrapper)`
  flex-direction: column;
`;
