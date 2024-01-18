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
  background-color: ${({ theme, disabled, destructive }) =>
    destructive
      ? theme.palette.error[disabled ? 200 : 600]
      : theme.palette.primary[disabled ? 100 : 500]};
  color: ${({ theme }) => theme.palette.base.white};
  border: 0;

  &:hover {
    background-color: ${({ theme, destructive }) =>
      destructive ? theme.palette.error[700] : theme.palette.primary[600]};
  }

  &:focus {
    background-color: ${({ theme, destructive }) =>
      destructive ? theme.palette.error[600] : theme.palette.primary[500]};
    box-shadow: ${({ theme, destructive }) =>
      `0px 0px 0px 4px ${
        destructive ? theme.palette.error[100] : theme.palette.primary[100]
      }`};
  }

  &:disabled {
    background-color: ${({ theme, destructive }) =>
      destructive ? theme.palette.error[200] : theme.palette.primary[100]};
  }
`;

const secondaryButtonType = css<IStyledButton>`
  background-color: ${({ theme, disabled, destructive }) =>
    destructive
      ? theme.palette.error[disabled ? 25 : 50]
      : theme.palette.primary[disabled ? 25 : 50]};
  color: ${({ theme, destructive }) =>
    destructive ? theme.palette.error[600] : theme.palette.primary[500]};
  border: 0;

  &:hover {
    background-color: ${({ theme, destructive }) =>
      destructive ? theme.palette.error[100] : theme.palette.primary[100]};
    color: ${({ theme, destructive }) =>
      destructive ? theme.palette.error[700] : theme.palette.primary[600]};
  }

  &:focus {
    background-color: ${({ theme, destructive }) =>
      destructive ? theme.palette.error[50] : theme.palette.primary[50]};
    box-shadow: ${({ theme, destructive }) =>
      `0px 0px 0px 4px ${
        destructive ? theme.palette.error[100] : theme.palette.primary[100]
      }`};
  }

  &:disabled {
    background-color: ${({ theme, destructive }) =>
      destructive ? theme.palette.error[25] : theme.palette.primary[25]};
    color: ${({ theme, destructive }) =>
      destructive ? theme.palette.error[200] : theme.palette.primary[300]};
  }
`;

const tertiaryButtonType = css<IStyledButton>`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary[500]};
  border: 0;

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

const tertiaryGrayButtonType = css<IStyledButton>`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.gray[600]};
  border: 0;

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray[50]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.base.white};
    color: ${({ theme }) => theme.palette.gray[300]};
  }
`;

const ghostButtonType = css<IStyledButton>`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.primary[600]};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.primary[400]};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary[25]};
    border-color: ${({ theme }) => theme.palette.primary[500]};
  }

  &:focus {
    box-shadow: ${({ theme }) =>
      `0px 0px 0px 4px ${theme.palette.primary[100]}`};
    border-color: ${({ theme }) => theme.palette.primary[400]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.primary[200]};
    border-color: ${({ theme }) => theme.palette.primary[200]};
  }
`;

const ghostGrayButtonType = css<IStyledButton>`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.gray[700]};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.gray[300]};

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray[50]};
    border-color: ${({ theme }) => theme.palette.gray[300]};
  }

  &:focus {
    box-shadow: ${({ theme }) => `0px 0px 0px 4px ${theme.palette.gray[100]}`};
    border-color: ${({ theme }) => theme.palette.gray[300]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.gray[300]};
    border-color: ${({ theme }) => theme.palette.gray[200]};
  }
`;

const linkButtonType = css<IStyledButton>`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.primary[500]};
  border: 0;

  &:hover {
    color: ${({ theme }) => theme.palette.primary[600]};
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.gray[300]};
  }
`;

const linkGrayButtonType = css<IStyledButton>`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.gray[600]};
  border: 0;

  &:hover {
    color: ${({ theme }) => theme.palette.gray[700]};
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.gray[300]};
  }
`;
const buttonTypeStyle = {
  [ButtonTypes.PRIMARY]: primaryButtonType,
  [ButtonTypes.SECONDARY]: secondaryButtonType,
  [ButtonTypes.TERTIARY]: tertiaryButtonType,
  [ButtonTypes.TERTIARY_GRAY]: tertiaryGrayButtonType,
  [ButtonTypes.GHOST]: ghostButtonType,
  [ButtonTypes.GHOST_GRAY]: ghostGrayButtonType,
  [ButtonTypes.LINK]: linkButtonType,
  [ButtonTypes.LINK_GRAY]: linkGrayButtonType,
} as Record<
  `${ButtonTypes}`,
  FlattenInterpolation<ThemedStyledProps<IStyledButton, DefaultTheme>>
>;

/* ---------------------------- Styled Components --------------------------- */
export const StyledButton = styled.button<IStyledButton>`
  ${commonTypography}
  ${commonTransition}
  ${({ types }) => types && buttonTypeStyle[types]}
  border-radius: ${({ theme }) => theme.spacing[1]};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[8]}`};
`;
/* -------------------------------------------------------------------------- */
