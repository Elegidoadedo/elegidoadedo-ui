
import { ButtonHelperParams } from './Button.types';


export const setBackgroundColor = ({
  variant = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'primary') return 'blue';
  return 'transparent';
};

export const setHoverBackgroundColor = ({
  variant = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'primary') return 'blue';

  return 'white';
};

export const setDisabledBackgroundColor = ({

  variant = 'primary',
 
}: ButtonHelperParams) => {
  if (variant === 'primary') return 'grey';
  return 'transparent';
};

export const setTextColor = ({
  variant = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'primary') return 'white';
  return 'black';
};

export const setBorderColor = ({
  variant = 'primary',
}: ButtonHelperParams) => {
  if (variant === 'secondary') return 'blue';
  return 'transparent';
};


