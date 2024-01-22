import { Meta, StoryObj } from '@storybook/react';
import Group from '../group';

const meta: Meta<typeof Group> = {
  title: 'Icons/Users/Group',
  component: Group,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Group>;

export const Base: Story = {
  render: (args) => <Group {...args} />,
};
