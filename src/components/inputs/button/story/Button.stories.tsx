import { Meta, StoryObj } from '@storybook/react';
import {
  ButtonVariants,
  IButtonProps,
} from '~/components/inputs/button/i-button-props';
import { Sizes } from '~/components/common/common-enums';
import { Circle } from '~/components/icons';
import { Button } from '~/index';

export default {
  title: 'Input/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/DD3GQCNDXjQaaXApTxmfES/Jinex-Design-System-(Code)?type=design&node-id=2-18000&mode=design&t=dhI8p1bAV000t9J2-4',
    },
  },
  args: {
    label: 'Default Label',
    destructive: false,
    variants: ButtonVariants.PRIMARY,
    size: Sizes.MEDIUM,
    disabled: false,
    expanded: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variants: {
      control: 'radio',
      options: Object.values(ButtonVariants),
    },
    size: {
      control: 'radio',
      options: Object.values(Sizes),
    },
    label: {
      type: 'string',
    },
    destructive: {
      defaultValue: false,
      description: 'Danger state or not',
      type: 'boolean',
    },
    expanded: {
      defaultValue: false,
      description: 'take all width places of parent',
      type: 'boolean',
    },
  },
} as Meta<typeof Button>;

export const Primary: StoryObj<Meta> = {
  render: (props) => {
    return (
      <Button
        {...(props as IButtonProps)}
        LeadingIcon={<Circle />}
        TrailingIcon={<Circle />}
      />
    );
  },
};
