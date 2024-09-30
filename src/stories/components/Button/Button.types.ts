import React, { MouseEventHandler } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonColor = string; //TODO change with the palette ready

export interface Props
  extends ComponentPropsBase,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  shape?: 'square' | 'rounded';
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}




export interface ButtonHelperParams {
  variant?: ButtonVariant;
  fullWidth?: Boolean;
}
