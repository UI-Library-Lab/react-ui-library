import { Meta, StoryObj } from '@storybook/react';
import GitBranch from '../git-branch';

const meta: Meta<typeof GitBranch> = {
  title: 'Icons/Git/Git branch',
  component: GitBranch,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof GitBranch>;

export const Base: Story = {
  render: (args) => <GitBranch {...args} />,
};
