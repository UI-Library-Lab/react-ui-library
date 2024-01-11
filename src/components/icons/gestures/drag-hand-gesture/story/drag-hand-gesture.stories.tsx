import { Meta, StoryObj } from '@storybook/react';
import DragHandGesture from '../drag-hand-gesture';

const meta: Meta<typeof DragHandGesture> = {
  title: 'Icons/Drag hand gesture',
  component: DragHandGesture,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DragHandGesture>;

export const Base: Story = {
  render: (args) => <DragHandGesture {...args} />,
};
