import { Meta, StoryObj } from '@storybook/react';
import BeachBagBig from '../beach-bag-big';

const meta: Meta<typeof BeachBagBig> = {
  title: 'Icons/Clothing/Beach bag big',
  component: BeachBagBig,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BeachBagBig>;

export const Base: Story = {
  render: (args) => <BeachBagBig {...args} />,
};
