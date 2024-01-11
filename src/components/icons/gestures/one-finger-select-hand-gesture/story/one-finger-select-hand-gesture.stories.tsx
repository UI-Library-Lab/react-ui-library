import { Meta, StoryObj } from '@storybook/react';
import OneFingerSelectHandGesture from '../one-finger-select-hand-gesture';

const meta: Meta<typeof OneFingerSelectHandGesture> = {
  title: 'Icons/One finger select hand gesture',
  component: OneFingerSelectHandGesture,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof OneFingerSelectHandGesture>;

export const Base: Story = {
  render: (args) => <OneFingerSelectHandGesture {...args} />,
};
