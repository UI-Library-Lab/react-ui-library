import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function AddKeyframeAlt(props: IIconsCommonProps) {
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
        d='M18.8189 13.3287L13.4948 19.3183C12.6992 20.2134 11.3008 20.2134 10.5052 19.3183L5.18109 13.3287C4.50752 12.571 4.50752 11.429 5.18109 10.6713L10.5052 4.68167C11.3008 3.78664 12.6992 3.78664 13.4948 4.68167L18.8189 10.6713C19.4925 11.429 19.4925 12.571 18.8189 13.3287Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 12H12M15 12H12M12 12V9M12 12V15'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </StyledIcon>
  );
}
