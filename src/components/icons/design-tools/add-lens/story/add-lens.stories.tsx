import { Meta, StoryObj } from '@storybook/react';
import AddLens from '../add-lens';

const meta: Meta<typeof AddLens> = {
  title: 'Icons/Design Tools/Add lens',
  component: AddLens,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddLens>;

export const Base: Story = {
  render: (args) => <AddLens {...args} />,
};
