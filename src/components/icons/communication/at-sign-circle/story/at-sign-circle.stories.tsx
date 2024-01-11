import { Meta, StoryObj } from '@storybook/react';
import AtSignCircle from '../at-sign-circle';

const meta: Meta<typeof AtSignCircle> = {
  title: 'Icons/At sign circle',
  component: AtSignCircle,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AtSignCircle>;

export const Base: Story = {
  render: (args) => <AtSignCircle {...args} />,
};
