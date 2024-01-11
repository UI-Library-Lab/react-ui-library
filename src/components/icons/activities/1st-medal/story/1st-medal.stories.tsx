import { Meta, StoryObj } from '@storybook/react';
import Medal from '../1st-medal';

const meta: Meta<typeof Medal> = {
  title: 'Icons/1st medal',
  component: Medal,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Medal>;

export const Base: Story = {
  render: (args) => <Medal {...args} />,
};
