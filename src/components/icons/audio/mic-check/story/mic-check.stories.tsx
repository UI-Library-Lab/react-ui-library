import { Meta, StoryObj } from '@storybook/react';
import MicCheck from '../mic-check';

const meta: Meta<typeof MicCheck> = {
  title: 'Icons/Mic check',
  component: MicCheck,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof MicCheck>;

export const Base: Story = {
  render: (args) => <MicCheck {...args} />,
};
