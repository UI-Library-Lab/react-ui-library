import React from 'react';
import withThemeWrapper from '~/theme/withThemeWrapper';
import { IButtonVM } from './prototype/ButtonProto';
import { StyledButton } from './style';
/* -------------------------------------------------------------------------- */
/**
 * Primary UI component for user interaction
 */
const Button = (props: IButtonVM) => {
  const { size, primary, label } = props;
  return (
    <StyledButton size={size} primary={primary} {...props}>
      {label}
    </StyledButton>
  );
};

export default withThemeWrapper<IButtonVM>(Button);
