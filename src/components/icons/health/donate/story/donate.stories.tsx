import { Meta, StoryObj } from '@storybook/react';
import Donate from '../donate';

const meta: Meta<typeof Donate> = {
  title: 'Icons/Donate',
  component: Donate,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Donate>;

export const Base: Story = {
  render: (args) => <Donate {...args} />,
};
