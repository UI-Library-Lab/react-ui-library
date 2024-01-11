import { Meta, StoryObj } from '@storybook/react';
import MicAdd from '../mic-add';

const meta: Meta<typeof MicAdd> = {
  title: 'Icons/Mic add',
  component: MicAdd,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof MicAdd>;

export const Base: Story = {
  render: (args) => <MicAdd {...args} />,
};
