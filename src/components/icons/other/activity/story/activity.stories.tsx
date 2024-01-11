import { Meta, StoryObj } from '@storybook/react';
import Activity from '../activity';

const meta: Meta<typeof Activity> = {
  title: 'Icons/Activity',
  component: Activity,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Activity>;

export const Base: Story = {
  render: (args) => <Activity {...args} />,
};
