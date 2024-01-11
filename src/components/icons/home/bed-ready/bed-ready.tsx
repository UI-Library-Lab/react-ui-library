import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function BedReady(props: IIconsCommonProps) {
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
        d='M21 16V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H14'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 8L11 8L11 6'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 8L13 8L13 6'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 20L18 22L22 18'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </StyledIcon>
  );
}
