import { Meta, StoryObj } from '@storybook/react';
import AppleHalf from '../apple-half';

const meta: Meta<typeof AppleHalf> = {
  title: 'Icons/Apple half',
  component: AppleHalf,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppleHalf>;

export const Base: Story = {
  render: (args) => <AppleHalf {...args} />,
};
