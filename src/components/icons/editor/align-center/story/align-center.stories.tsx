import { Meta, StoryObj } from '@storybook/react';
import AlignCenter from '../align-center';

const meta: Meta<typeof AlignCenter> = {
  title: 'Icons/Align center',
  component: AlignCenter,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlignCenter>;

export const Base: Story = {
  render: (args) => <AlignCenter {...args} />,
};
