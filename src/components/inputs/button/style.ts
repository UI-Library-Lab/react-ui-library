import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
  css,
} from 'styled-components';
import { Sizes } from '~/components/common/common-enums';
import {
  commonTransition,
  commonTypography,
} from '~/components/common/common-styles';
import {
  ButtonVariants,
  IButtonProps,
} from '~/components/inputs/button/i-button-props';
import {
  type NTypographyConfigs,
  type SpacingConfigs,
} from '@ui-library-lab/core-js';

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
  color: ${({ theme }) => theme.palette.background};
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
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.primary[500]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.gray[300]};
  }
`;

const tertiaryGrayButtonType = css<IStyledButton>`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.gray[600]};
  border: 0;

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray[50]};
    color: ${({ theme }) => theme.palette.gray[700]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme, destructive }) =>
      destructive ? theme.palette.error[300] : theme.palette.gray[300]};
  }
`;

/**
 * Error css for both Tertiary
 */
const tertiaryError = css`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.error[600]};
  border: 0;

  &:hover {
    background-color: ${({ theme }) => theme.palette.error[50]};
    color: ${({ theme }) => theme.palette.error[700]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.error[300]};
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

/**
 * Error css for both Ghost type
 */
const ghostErrorButtonType = css<IStyledButton>`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.error[600]};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.error[400]};

  &:hover {
    background-color: ${({ theme }) => theme.palette.error[25]};
    border-color: ${({ theme }) => theme.palette.error[500]};
  }

  &:focus {
    box-shadow: ${({ theme }) => `0px 0px 0px 4px ${theme.palette.error[100]}`};
    border-color: ${({ theme }) => theme.palette.error[400]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.error[200]};
    border-color: ${({ theme }) => theme.palette.error[200]};
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

/**
 * Error css for both link type
 */
const linkErrorButtonType = css<IStyledButton>`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.error[600]};
  border: 0;

  &:hover {
    color: ${({ theme }) => theme.palette.error[700]};
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.error[300]};
  }
`;

const buttonTypeStyle = (destructive: boolean) =>
  ({
    [ButtonVariants.PRIMARY]: primaryButtonType,
    [ButtonVariants.SECONDARY]: secondaryButtonType,
    [ButtonVariants.TERTIARY]: destructive ? tertiaryError : tertiaryButtonType,
    [ButtonVariants.TERTIARY_GRAY]: destructive
      ? tertiaryError
      : tertiaryGrayButtonType,
    [ButtonVariants.GHOST]: destructive
      ? ghostErrorButtonType
      : ghostButtonType,
    [ButtonVariants.GHOST_GRAY]: destructive
      ? ghostErrorButtonType
      : ghostGrayButtonType,
    [ButtonVariants.LINK]: destructive ? linkErrorButtonType : linkButtonType,
    [ButtonVariants.LINK_GRAY]: destructive
      ? linkErrorButtonType
      : linkGrayButtonType,
  } as Record<
    `${ButtonVariants}`,
    FlattenInterpolation<ThemedStyledProps<IStyledButton, DefaultTheme>>
  >);

/* ---------------------------------- Sizes --------------------------------- */
const buttonWidthSizesStyle = (sizes: SpacingConfigs) =>
  ({
    [Sizes.SMALL]: sizes[32],
    [Sizes.MEDIUM]: sizes[34],
    [Sizes.LARGE]: sizes[36],
    [Sizes.XLARGE]: sizes[38],
    [Sizes.XXLARGE]: sizes[48],
  } as Record<`${Sizes}`, string>);

const buttonHeightSizesStyle = (sizes: SpacingConfigs) =>
  ({
    [Sizes.SMALL]: sizes[8],
    [Sizes.MEDIUM]: sizes[10],
    [Sizes.LARGE]: sizes[11],
    [Sizes.XLARGE]: sizes[12],
    [Sizes.XXLARGE]: sizes[14],
  } as Record<`${Sizes}`, string>);

const buttonFontSizes = (font: NTypographyConfigs.Typography) =>
  ({
    [Sizes.SMALL]: font.fontSize.text.sm.size,
    [Sizes.MEDIUM]: font.fontSize.text.sm.size,
    [Sizes.LARGE]: font.fontSize.text.md.size,
    [Sizes.XLARGE]: font.fontSize.text.md.size,
    [Sizes.XXLARGE]: font.fontSize.text.lg.size,
  } as Record<`${Sizes}`, string>);

const buttonLineHeight = (font: NTypographyConfigs.Typography) =>
  ({
    [Sizes.SMALL]: font.fontSize.text.sm.lineHeight,
    [Sizes.MEDIUM]: font.fontSize.text.sm.lineHeight,
    [Sizes.LARGE]: font.fontSize.text.md.lineHeight,
    [Sizes.XLARGE]: font.fontSize.text.md.lineHeight,
    [Sizes.XXLARGE]: font.fontSize.text.lg.lineHeight,
  } as Record<`${Sizes}`, string>);

const buttonPadding = (sizes: SpacingConfigs) =>
  ({
    [Sizes.SMALL]: `${sizes[2]} ${sizes[3]}`,
    [Sizes.MEDIUM]: `${sizes[2.5]} ${sizes[4]}`,
    [Sizes.LARGE]: `${sizes[2.5]} ${sizes[4.5]}`,
    [Sizes.XLARGE]: `${sizes[3]} ${sizes[6]}`,
    [Sizes.XXLARGE]: `${sizes[4]} ${sizes[8]}`,
  } as Record<`${Sizes}`, string>);

const buttonSizesStyles = css<IStyledButton>`
  min-width: ${({ size, theme, expanded }) =>
    expanded ? '100%' : buttonWidthSizesStyle(theme.spacing)[size]};
  min-height: ${({ size, theme }) =>
    buttonHeightSizesStyle(theme.spacing)[size]};
  font-size: ${({ size, theme }) => buttonFontSizes(theme.typography)[size]};
  line-height: ${({ size, theme }) => buttonLineHeight(theme.typography)[size]};
  padding: ${({ theme, size }) => buttonPadding(theme.spacing)[size]};
`;

/* ---------------------------- Styled Components --------------------------- */
export const StyledButton = styled.button<IStyledButton>`
  ${commonTypography}
  ${commonTransition}
  // Sizes css
  ${buttonSizesStyles}
  // types css
  ${({ variants, destructive }) =>
    variants && buttonTypeStyle(destructive || false)[variants]}
  border-radius: ${({ theme }) => theme.spacing[1]};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;
/* -------------------------------------------------------------------------- */
