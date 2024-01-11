import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '../../common/icon-common-props';

export default function Archery(props: IIconsCommonProps) {
  return (
    <StyledIcon
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7 12H18M7 12L5 10H1L3 12L1 14H5L7 12ZM18 12L16 10M18 12L16 14'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.5 22C20.5376 22 23 17.5228 23 12C23 6.47715 20.5376 2 17.5 2C14.4624 2 12 6.47715 12 12C12 17.5228 14.4624 22 17.5 22Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </StyledIcon>
  );
}
