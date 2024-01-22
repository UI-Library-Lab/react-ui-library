import { Meta, StoryObj } from '@storybook/react';
import Hammer from '../hammer';

const meta: Meta<typeof Hammer> = {
  title: 'Icons/Tools/Hammer',
  component: Hammer,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hammer>;

export const Base: Story = {
  render: (args) => <Hammer {...args} />,
};
