import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function AddLens(props: IIconsCommonProps) {
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
        d='M2.99219 6H5.99219M8.99219 6H5.99219M5.99219 6V3M5.99219 6V9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.11169 13.5001C2.83542 18.3113 6.98691 22.0001 11.9999 22.0001C17.5228 22.0001 21.9999 17.5229 21.9999 12.0001C21.9999 6.98703 18.3112 2.83554 13.4999 2.11182'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.1973 9C17.0976 8.82774 16.9896 8.66089 16.8739 8.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.811 13.5C17.2683 15.6084 15.6084 17.2683 13.5 17.811'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </StyledIcon>
  );
}
