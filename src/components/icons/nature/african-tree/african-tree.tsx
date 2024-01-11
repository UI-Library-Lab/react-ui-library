import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function AfricanTree(props: IIconsCommonProps) {
  return (
    <StyledIcon
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_4839)'>
        <path
          d='M12 22L12 12M12 8L12 12M12 12L15 9'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.4243 18.5758L18.5929 12.4072C20.933 10.067 20.6926 6.20542 18.0803 4.17361C14.504 1.39203 9.49606 1.39204 5.91975 4.17362C3.30741 6.20544 3.06698 10.0671 5.40713 12.4072L11.5757 18.5758C11.81 18.8101 12.1899 18.8101 12.4243 18.5758Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_4839'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </StyledIcon>
  );
}
