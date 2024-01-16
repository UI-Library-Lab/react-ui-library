import ICommonProps from '~/components/common/common-props';
import { Sizes } from '~/components/common/common-enums';
import { ReactNode } from 'react';

/* ---------------------------------- Enums --------------------------------- */
export enum ButtonTypes {
  PRIMARY = 'Primary',
  SECONDARY = 'Secondary',
  TERTIARY = 'Tertiary',
  TERTIARY_GRAY = 'Tertiary Gray',
  GHOST = 'Ghost',
  GHOST_GRAY = 'Ghost Gray',
  LINK = 'Link',
  LINK_GRAY = 'Link Gray',
}

/* -------------------------------- Interface ------------------------------- */
export interface IButtonProps extends ICommonProps<HTMLButtonElement> {
  /**
   * Type of button to show
   *
   * Default: Primary
   */
  types?: `${ButtonTypes}`;
  /**
   * How large should the button be?
   *
   * Default: MEDIUM
   */
  size?: `${Sizes}`;
  /**
   * Button contents
   */
  label: string;
  /**
   * Icon to show before button
   */
  LeadingIcon?: ReactNode;
  /**
   * Icon to show after button
   */
  TrailingIcon?: ReactNode;
  /**
   * Is error shape
   */
  destructive?: boolean;
  /**
   * Is button disabled?
   */
  disabled?: boolean;
}
