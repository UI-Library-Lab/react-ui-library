import { Meta, StoryObj } from '@storybook/react';
import TwoXTwoCell from '../2x2-cell';

const meta: Meta<typeof TwoXTwoCell> = {
  title: 'Icons/2x2 cell',
  component: TwoXTwoCell,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TwoXTwoCell>;

export const Base: Story = {
  render: (args) => <TwoXTwoCell {...args} />,
};
