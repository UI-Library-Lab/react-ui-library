import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function Bag(props: IIconsCommonProps) {
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
        d='M4.50828 20H19.4917C19.785 20 20.0353 19.788 20.0836 19.4986L21.8836 8.69864C21.9445 8.33292 21.6625 8 21.2917 8H2.70828C2.33751 8 2.05549 8.33292 2.11644 8.69864L3.91644 19.4986C3.96466 19.788 4.21497 20 4.50828 20Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M7 8V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V8'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </StyledIcon>
  );
}
