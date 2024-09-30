import React, { FC } from 'react';
import { Props } from './Button.types';
import { StyledButton } from './Button.styles';
import { Spinner } from '../Spinner/Spinner';


export const Button: FC<Props> = ({
  text,
  size = 'medium',
  color = 'primary',
  onClick,
  shape = 'rounded',
  variant = 'primary',
  className,
  testId,
  isLoading,
  isDisabled,
  fullWidth,
  ...props
}) => {
 

  

  const renderLoadingIcon = () => (
    <Spinner size={16} color="currentColor" />
  );



 

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isLoading) return;
    onClick?.(e);
  };

  return (
    <StyledButton
      fullWidth={fullWidth}
      variant={variant}
      shape={shape}
      color={color}
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
