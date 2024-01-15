import { Meta, StoryObj } from '@storybook/react';
import { ButtonTypes } from '~/components/inputs/button/i-button-props';
import { Sizes, State } from '~/components/common/common-enums';
import button from '~/components/inputs/button/button';

export default {
  title: 'Input/Button',
  component: button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/DD3GQCNDXjQaaXApTxmfES/Jinex-Design-System-(Code)?type=design&node-id=2-18000&mode=design&t=dhI8p1bAV000t9J2-4',
    },
  },
  args: {
    label: 'Default Label',
    destructive: false,
    types: ButtonTypes.PRIMARY,
    size: Sizes.MEDIUM,
    state: State.DEFUALT,
  },
  argTypes: {
    types: {
      control: 'radio',
      options: Object.values(ButtonTypes),
    },
    state: {
      conrol: 'radio',
      options: Object.values(State),
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
  },
} as Meta<typeof button>;

export const Primary: StoryObj<Meta> = {};
