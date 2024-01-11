import React from 'react';
import StyledIcon from '~/components/icons/common/styles';
import IIconsCommonProps from '~/components/icons/common/icon-common-props';

export default function BitBucket(props: IIconsCommonProps) {
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
        d='M20.9157 4.67442L19.0657 19.4744C19.0282 19.7747 18.7729 20 18.4703 20H5.52967C5.22708 20 4.97183 19.7747 4.9343 19.4744L3.0843 4.67442C3.03954 4.31631 3.31877 4 3.67967 4H20.3203C20.6812 4 20.9605 4.31631 20.9157 4.67442Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.75 7.75L15.8123 15.7201C15.7768 16.0223 15.5207 16.25 15.2164 16.25H8.78354C8.47929 16.25 8.2232 16.0223 8.18765 15.7201L7.32882 8.4201C7.28686 8.06341 7.56556 7.75 7.92472 7.75H16.75ZM16.75 7.75H20.4999'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </StyledIcon>
  );
}
