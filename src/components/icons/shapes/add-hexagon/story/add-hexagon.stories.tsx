import { Meta, StoryObj } from '@storybook/react';
import AddHexagon from '../add-hexagon';

const meta: Meta<typeof AddHexagon> = {
  title: 'Icons/Add hexagon',
  component: AddHexagon,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddHexagon>;

export const Base: Story = {
  render: (args) => <AddHexagon {...args} />,
};
