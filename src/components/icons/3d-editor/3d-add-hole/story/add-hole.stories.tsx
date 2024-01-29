import { Meta, StoryObj } from '@storybook/react';
import AddHole from '../3d-add-hole';

const meta: Meta<typeof AddHole> = {
  title: 'Icons/3d editor/Add hole',
  component: AddHole,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddHole>;

export const Base: Story = {
  render: (args) => <AddHole {...args} />,
};
