import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
  css,
} from 'styled-components';
import {
  commonTransition,
  commonTypography,
} from '~/components/common/common-styles';
import {
  ButtonTypes,
  IButtonProps,
} from '~/components/inputs/button/i-button-props';

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */
type IStyledButton = Omit<IButtonProps, 'ref'>;
/* -------------------------------------------------------------------------- */
/*                                 Implements                                 */
/* -------------------------------------------------------------------------- */

/* ------------------------------- ButtonTypes ------------------------------ */
const primaryButtonType = css<IStyledButton>`
  background-color: ${({ theme, disabled }) =>
    theme.palette.primary[disabled ? 100 : 500]};
  color: ${({ theme }) => theme.palette.base.white};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary[600]};
  }

  &:focus {
    background-color: ${({ theme }) => theme.palette.primary[500]};
    box-shadow: ${({ theme }) =>
      `0px 0px 0px 4px ${theme.palette.primary[100]}`};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary[100]};
  }
`;

const secondaryButtonType = css<IStyledButton>`
  background-color: ${({ theme, disabled }) =>
    theme.palette.primary[disabled ? 25 : 50]};
  color: ${({ theme }) => theme.palette.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary[100]};
  }

  &:focus {
    background-color: ${({ theme }) => theme.palette.primary[50]};
    box-shadow: ${({ theme }) =>
      `0px 0px 0px 4px ${theme.palette.primary[100]}`};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary[25]};
    color: ${({ theme }) => theme.palette.primary[300]};
  }
`;

const tertiaryButtonType = css<IStyledButton>`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary[50]};
    color: ${({ theme }) => theme.palette.primary[600]};
  }

  &:focus {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.primary[500]};
  }

  &:disabled {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.gray[300]};
  }
`;
const buttonTypeStyle = {
  [ButtonTypes.PRIMARY]: primaryButtonType,
  [ButtonTypes.SECONDARY]: secondaryButtonType,
  [ButtonTypes.TERTIARY]: tertiaryButtonType,
} as Record<
  `${ButtonTypes}`,
  FlattenInterpolation<ThemedStyledProps<IStyledButton, DefaultTheme>>
>;

/* ---------------------------- Styled Components --------------------------- */
export const StyledButton = styled.button<IStyledButton>`
  ${commonTypography}
  ${commonTransition}
  ${({ types }) => (types ? buttonTypeStyle[types] : '')}
  border: 0;
  border-radius: ${({ theme }) => theme.spacing[1]};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: inline-block;
  padding: ${({ theme }) => theme.spacing[4]};
`;
/* -------------------------------------------------------------------------- */
