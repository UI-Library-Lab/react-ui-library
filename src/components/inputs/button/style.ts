import styled from 'styled-components';
import { IButtonVM } from './prototype/ButtonProto';

/* -------------------------------- interface ------------------------------- */
type IStyledButton = Pick<IButtonVM, 'size' | 'primary'>;
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
  box-shadow: ${({ primary, theme }) =>
    primary ? theme.shadow.md : theme.shadow.md};
`;
