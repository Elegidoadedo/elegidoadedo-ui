import type React from 'react';
import type { ComponentPropsBase } from 'src/stories/types/ComponentPropsBase';



export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export type ButtonColor = string; //TODO change with the palette ready

export interface Props
  extends ComponentPropsBase{
  text?: string;
  size?: number;
  color?: ButtonColor;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: () => void;
}




export interface ButtonHelperParams {
  variant?: ButtonVariant;
  fullWidth?: Boolean;
  size?: number | string;
}
