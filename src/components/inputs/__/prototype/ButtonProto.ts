export enum ButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface IButtonVM extends JSX.IntrinsicAttributes {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: `${ButtonSizes}`;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
