import { Meta, StoryObj } from '@storybook/react';
import EmojiBall from '../emoji-ball';

const meta: Meta<typeof EmojiBall> = {
  title: 'Icons/Emoji ball',
  component: EmojiBall,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmojiBall>;

export const Base: Story = {
  render: (args) => <EmojiBall {...args} />,
};
