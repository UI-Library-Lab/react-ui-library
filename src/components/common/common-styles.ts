import { css } from 'styled-components';

export const commonTypography = css`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.text.md.size};
  font-weight: ${({ theme }) => theme.typography.fontWight.medium};
  line-height: ${({ theme }) => theme.typography.fontSize.text.md.lineHeight};
`;

export const commonTransition = css`
  transition: all 0.2s;
`;
