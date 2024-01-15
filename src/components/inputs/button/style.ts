import styled from 'styled-components';
import { IButtonProps } from '~/components/inputs/button/i-button-props';

/* -------------------------------- interface ------------------------------- */
type IStyledButton = Omit<IButtonProps, 'ref'>;
/* ------------------------------- implements ------------------------------- */
export const StyledButton = styled.button<IStyledButton>`
  transition: all 0.2s;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${({ theme }) => theme.palette.text.primary};
  background: ${({ theme }) => theme.palette.background};
`;
