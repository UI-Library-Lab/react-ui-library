import { Meta, StoryObj } from '@storybook/react';
import AddFrame from '../add-frame';

const meta: Meta<typeof AddFrame> = {
  title: 'Icons/Add frame',
  component: AddFrame,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddFrame>;

export const Base: Story = {
  render: (args) => <AddFrame {...args} />,
};
