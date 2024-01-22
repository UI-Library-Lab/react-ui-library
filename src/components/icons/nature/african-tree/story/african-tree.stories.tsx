import { Meta, StoryObj } from '@storybook/react';
import AfricanTree from '../african-tree';

const meta: Meta<typeof AfricanTree> = {
  title: 'Icons/Nature/African tree',
  component: AfricanTree,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AfricanTree>;

export const Base: Story = {
  render: (args) => <AfricanTree {...args} />,
};
