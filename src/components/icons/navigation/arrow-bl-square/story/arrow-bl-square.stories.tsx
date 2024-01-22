import { Meta, StoryObj } from '@storybook/react';
import ArrowBlSquare from '../arrow-bl-square';

const meta: Meta<typeof ArrowBlSquare> = {
  title: 'Icons/Navigation/Arrow bl square',
  component: ArrowBlSquare,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArrowBlSquare>;

export const Base: Story = {
  render: (args) => <ArrowBlSquare {...args} />,
};
