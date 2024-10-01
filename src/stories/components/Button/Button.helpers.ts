
import { ButtonHelperParams } from './Button.types';

export const buttonThemes = {
  background: {
    primary: "black",
    secondary: "white",
    error: "red",
    warning: "yellow",
    success: "green",
  },
  text: {
    primary: "white",
    secondary: "black",
    error: "black",
    warning: "black",
    success: "black"
  },
  border: {
    primary: "black",
    secondary: "black",
    warning: "black",
    error: "black",
    success: "black"
  }
}


export const setBackgroundColor = ({
  variant = 'primary',
}: ButtonHelperParams) => {
  return buttonThemes.background[variant] || 'transparent'
};

export const setHoverBackgroundColor = ({
  variant = 'primary',
}: ButtonHelperParams) => {
   return buttonThemes.background[variant] || 'transparent'
};

export const setDisabledBackgroundColor = ({
  variant = 'primary',
}: ButtonHelperParams) => {
 return 'grey'; //TODO DEFINE TONES
};

export const setTextColor = ({
  variant = 'primary',
}: ButtonHelperParams) => {
  return buttonThemes.text[variant] || 'black'
};

export const setBorderColor = ({
  variant = 'primary',
}: ButtonHelperParams) => {
  return buttonThemes.border[variant] || 'black'

};


