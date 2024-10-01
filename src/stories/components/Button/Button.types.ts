import React, { MouseEventHandler } from 'react';



export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export type ButtonColor = string; //TODO change with the palette ready

export interface Props
  extends ComponentPropsBase,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: number;
  color?: ButtonColor;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}




export interface ButtonHelperParams {
  variant?: ButtonVariant;
  fullWidth?: Boolean;
  size?: number;
}
