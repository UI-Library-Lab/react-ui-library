import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function AppleHalf(props: IIconsCommonProps) {
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
        d='M12.1471 21.2646L12 21.2352L11.8529 21.2646C9.47627 21.7399 7.23257 21.4756 5.59352 20.1644C3.96312 18.8601 2.75 16.3741 2.75 12.0001C2.75 7.5269 3.75792 5.70961 5.08541 5.04587C5.77977 4.69869 6.67771 4.59765 7.82028 4.72949C8.96149 4.86117 10.2783 5.21675 11.7628 5.71159L12.0235 5.79847L12.2785 5.69644C14.7602 4.70373 16.9909 4.32346 18.5578 5.05469C20.0271 5.74036 21.25 7.59332 21.25 12.0001C21.25 16.3741 20.0369 18.8601 18.4065 20.1644C16.7674 21.4756 14.5237 21.7399 12.1471 21.2646Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M12 5.5C12 3 11 2 9 2'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M12 6V21' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M15 12L15 14'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </StyledIcon>
  );
}
