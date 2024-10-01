import React, { FC } from 'react';
import { Props } from './Button.types';
import { StyledButton } from './Button.styles';
import { Spinner } from '../Spinner/Spinner';


export const Button: FC<Props> = ({
  text,
  onClick,
  variant = 'primary',
  className,
  testId,
  isLoading,
  isDisabled,
  fullWidth,
  size = '1rem',
  ...props
}) => {
 

  

  const renderLoadingIcon = () => (
    <Spinner size={16} color="black" />
  );



 

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isLoading) return;
    onClick?.(e);
  };

  return (
    <StyledButton
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      onClick={handleOnClick}
      disabled={isDisabled}
      className={className}
      data-testid={testId}
      {...props}
    >
      { isLoading && renderLoadingIcon()}
      {text && <span>{text}</span>}
    </StyledButton>
  );
};
