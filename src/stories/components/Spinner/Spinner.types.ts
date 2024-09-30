
import { ComponentPropsBase } from "../../types/ComponentPropsBase"; 

export interface Props extends ComponentPropsBase {
  customStyle?: object;
  size?: number;
  color?: string | 'currentColor';
}
