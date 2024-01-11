import React from 'react';
import withThemeWrapper from '~/theme/withThemeWrapper';
import { IButtonVM } from './prototype/ButtonProto';
import { StyledButton } from './style';
/* -------------------------------------------------------------------------- */
/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: IButtonVM) => {
  return (
    <StyledButton
      className='test'
      size={size}
      primary={primary}
      type='button'
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default withThemeWrapper<IButtonVM>(Button);
