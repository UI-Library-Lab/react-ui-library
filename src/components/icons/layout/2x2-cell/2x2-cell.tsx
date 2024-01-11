import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function TwoXTwoCell(props: IIconsCommonProps) {
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
        d='M21 3.6V12H12V3H20.4C20.7314 3 21 3.26863 21 3.6Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M21 20.4V12H12V21H20.4C20.7314 21 21 20.7314 21 20.4Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M3 12V3.6C3 3.26863 3.26863 3 3.6 3H12V12H3Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M3 12V20.4C3 20.7314 3.26863 21 3.6 21H12V12H3Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </StyledIcon>
  );
}
