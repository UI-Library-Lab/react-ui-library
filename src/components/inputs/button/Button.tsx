import { type ForwardedRef } from 'react';
import withThemeWrapper from '~/theme/with-theme-wrapper';
import { type IButtonProps } from './i-button-props';
import { StyledButton } from './style';
/* -------------------------------------------------------------------------- */
/**
 * Primary UI component for user interaction
 */
const Button = withThemeWrapper<IButtonProps>(
  (props: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { label, Leading, Trailing } = props;
    return (
      <StyledButton {...props} ref={ref}>
        {Leading}
        {label}
        {Trailing}
      </StyledButton>
    );
  },
);

export default Button;
