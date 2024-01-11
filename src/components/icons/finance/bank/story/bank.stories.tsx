import { Meta, StoryObj } from '@storybook/react';
import Bank from '../bank';

const meta: Meta<typeof Bank> = {
  title: 'Icons/Bank',
  component: Bank,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Bank>;

export const Base: Story = {
  render: (args) => <Bank {...args} />,
};
