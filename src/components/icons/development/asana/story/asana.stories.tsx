import { Meta, StoryObj } from '@storybook/react';
import Asana from '../asana';

const meta: Meta<typeof Asana> = {
  title: 'Icons/Development/Asana',
  component: Asana,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Asana>;

export const Base: Story = {
  render: (args) => <Asana {...args} />,
};
