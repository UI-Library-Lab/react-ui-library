import ICommonProps from '~/components/common/common-props';

/* ---------------------------------- Enums --------------------------------- */
export enum ButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
/* -------------------------------- Interface ------------------------------- */
export interface IButtonVM extends ICommonProps<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: `${ButtonSizes}`;
  /**
   * Button contents
   */
  label: string;
}
