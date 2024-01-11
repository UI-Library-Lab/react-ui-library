import { Meta, StoryObj } from '@storybook/react';
import Archery from '../archery';

const meta: Meta<typeof Archery> = {
  title: 'Icons/Archery',
  component: Archery,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Archery>;

export const Base: Story = {
  render: (args) => <Archery {...args} />,
};
