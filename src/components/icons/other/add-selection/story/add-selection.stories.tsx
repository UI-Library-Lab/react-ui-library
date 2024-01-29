import { Meta, StoryObj } from '@storybook/react';
import AddSelection from '../add-selection';

const meta: Meta<typeof AddSelection> = {
  title: 'Icons/Other/Add selection',
  component: AddSelection,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddSelection>;

export const Base: Story = {
  render: (args) => <AddSelection {...args} />,
};
