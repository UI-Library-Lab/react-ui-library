import styled from 'styled-components';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

const StyledIcon = styled.svg<IIconsCommonProps>`
  color: ${({ theme }) => theme.palette.text.primary};
  background: ${({ theme }) => theme.palette.background};
`;

export default StyledIcon;
