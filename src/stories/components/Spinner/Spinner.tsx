
import React, { FC } from 'react';
import { StyledSpinnerWrapper } from './Spinner.styles';
import { Props } from './Spinner.types';
import { LoaderIcon } from '../Icons/LoaderIcon';

export const Spinner: FC<Props> = ({
  size = 'regular',
  className,
  testId = 'spinner',
}) => {
  return (
    <StyledSpinnerWrapper data-testid={testId} className={className}>
      <LoaderIcon fill='black'  stroke={'black'}  />
    </StyledSpinnerWrapper>
  );
};
