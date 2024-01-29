import { type ForwardedRef } from 'react';
import withThemeWrapper from '~/theme/withThemeWrapper';
import { type IButtonProps } from './i-button-props';
import { StyledButton } from './style';
/* -------------------------------------------------------------------------- */
/**
 * Primary UI component for user interaction
 */
const Button = withThemeWrapper<IButtonProps>(
  (props: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { label, LeadingIcon, TrailingIcon } = props;
    return (
      <StyledButton {...props} ref={ref}>
        {LeadingIcon}
        {label}
        {TrailingIcon}
      </StyledButton>
    );
  },
);

export default Button;
