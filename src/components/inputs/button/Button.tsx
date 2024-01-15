import { type ForwardedRef } from 'react';
import withThemeWrapper from '~/theme/withThemeWrapper';
import { type IButtonProps } from './i-button-props';
import { StyledButton } from './style';
/* -------------------------------------------------------------------------- */
/**
 * Primary UI component for user interaction
 */
const Button = (props: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { label } = props;
  return (
    <StyledButton {...props} ref={ref}>
      {label}
    </StyledButton>
  );
};

export default withThemeWrapper<IButtonProps>(Button);
