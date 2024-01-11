import { Meta, StoryObj } from '@storybook/react';
import ArrowBlCircled from '../arrow-bl-circled';

const meta: Meta<typeof ArrowBlCircled> = {
  title: 'Icons/Arrow bl circled',
  component: ArrowBlCircled,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArrowBlCircled>;

export const Base: Story = {
  render: (args) => <ArrowBlCircled {...args} />,
};
