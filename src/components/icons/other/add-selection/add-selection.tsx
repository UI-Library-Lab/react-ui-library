import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function AddSelection(props: IIconsCommonProps) {
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
        d='M8 12H12M16 12H12M12 12V8M12 12V16'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 4H4V7'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 11V13'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11 4H13'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11 20H13'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20 11V13'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 4H20V7'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 20H4V17'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 20H20V17'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </StyledIcon>
  );
}
