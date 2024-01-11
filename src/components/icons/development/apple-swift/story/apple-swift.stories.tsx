import { Meta, StoryObj } from '@storybook/react';
import AppleSwift from '../apple-swift';

const meta: Meta<typeof AppleSwift> = {
  title: 'Icons/Apple swift',
  component: AppleSwift,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppleSwift>;

export const Base: Story = {
  render: (args) => <AppleSwift {...args} />,
};
