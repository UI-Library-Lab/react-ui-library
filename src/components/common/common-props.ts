import React from 'react';

/**
 * All of components should have this props as base props.
 */
export default interface ICommonProps<T>
  extends JSX.IntrinsicAttributes,
    React.HTMLAttributes<T> {
  /**
   * Custom styles related to the component.
   */
  style?: React.CSSProperties;
  /**
   * Custom class names related to the component.
   */
  className?: string;
  /**
   * ref Object related to the component
   */
  ref?: React.RefObject<T> | null;
  /**
   * id of the root element
   */
  id?: string | undefined;
}
