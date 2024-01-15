import styled, { css } from 'styled-components';
import {
  commonTransition,
  commonTypography,
} from '~/components/common/common-styles';
import { IButtonProps } from '~/components/inputs/button/i-button-props';

/* -------------------------------- interface ------------------------------- */
type IStyledButton = Omit<IButtonProps, 'ref'>;
/* ------------------------------- implements ------------------------------- */

const primaryButtonType = css<IStyledButton>`
  background-color: ${({ theme, disabled }) =>
    theme.palette.primary[disabled ? 100 : 500]};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary[600]};
  }

  &:focus {
    background-color: ${({ theme }) => theme.palette.primary[500]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary[100]};
  }
`;

export const StyledButton = styled.button<IStyledButton>`
  ${commonTypography}
  ${commonTransition}
  ${primaryButtonType}
  border: 0;
  border-radius: ${({ theme }) => theme.spacing[1]};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: inline-block;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing[4]};
`;
