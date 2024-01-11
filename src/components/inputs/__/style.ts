import styled from 'styled-components';
import { ButtonSizes, IButtonVM } from './prototype/ButtonProto';
/* -------------------------------------------------------------------------- */
const sizes = {
  [ButtonSizes.SMALL]: {
    font: '12px',
    padding: '10px 16px',
  },
  [ButtonSizes.MEDIUM]: {
    font: '14px',
    padding: '11px 20px',
  },
  [ButtonSizes.LARGE]: {
    font: '16px',
    padding: '12px 24px',
  },
} as const;
/* -------------------------------- interface ------------------------------- */
interface IStyledButton {
  size: `${ButtonSizes}`;
  primary: IButtonVM['primary'];
}
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
  font-size: ${({ size }) => sizes[size].font};
  padding: ${({ size }) => sizes[size].padding};
  color: ${({ theme }) => theme.palette.text.primary};
  background: ${({ theme }) => theme.palette.background};
  box-shadow: ${({ primary, theme }) =>
    primary ? theme.shadow.md : theme.shadow.md};
`;
