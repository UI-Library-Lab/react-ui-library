import { Meta, StoryObj } from '@storybook/react';
import Bitbucket from '../bitbucket';

const meta: Meta<typeof Bitbucket> = {
  title: 'Icons/Bitbucket',
  component: Bitbucket,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Bitbucket>;

export const Base: Story = {
  render: (args) => <Bitbucket {...args} />,
};
