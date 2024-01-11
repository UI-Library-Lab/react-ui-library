import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function AngleTool(props: IIconsCommonProps) {
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
        d='M3 21L3 3L9 3V15L21 15V21H3Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13 19V21'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M9 19V21'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M3 7H5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M3 11H5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M3 15H5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M17 19V21'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </StyledIcon>
  );
}
