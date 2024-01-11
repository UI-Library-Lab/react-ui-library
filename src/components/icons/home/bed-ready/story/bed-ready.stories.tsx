import { Meta, StoryObj } from '@storybook/react';
import BedReady from '../bed-ready';

const meta: Meta<typeof BedReady> = {
  title: 'Icons/Bed ready',
  component: BedReady,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BedReady>;

export const Base: Story = {
  render: (args) => <BedReady {...args} />,
};
