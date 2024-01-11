import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function MicCheck(props: IIconsCommonProps) {
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
        d='M15.5 20.5L17.5 22.5L22.5 17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='5'
        y='2'
        width='6'
        height='12'
        rx='3'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M1 10V11C1 14.866 4.13401 18 8 18V18V18C11.866 18 15 14.866 15 11V10'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 18V22M8 22H5M8 22H11'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </StyledIcon>
  );
}
