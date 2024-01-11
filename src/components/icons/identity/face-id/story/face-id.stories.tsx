import { Meta, StoryObj } from '@storybook/react';
import FaceId from '../face-id';

const meta: Meta<typeof FaceId> = {
  title: 'Icons/Face id',
  component: FaceId,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FaceId>;

export const Base: Story = {
  render: (args) => <FaceId {...args} />,
};
