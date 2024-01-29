import { Meta, StoryObj } from '@storybook/react';
import Circle from '../circle';

const meta: Meta<typeof Circle> = {
  title: 'Icons/Shapes/Circle',
  component: Circle,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Circle>;

export const Base: Story = {
  render: (args) => <Circle {...args} />,
};
