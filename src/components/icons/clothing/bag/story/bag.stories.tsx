import { Meta, StoryObj } from '@storybook/react';
import Bag from '../bag';

const meta: Meta<typeof Bag> = {
  title: 'Icons/Bag',
  component: Bag,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Bag>;

export const Base: Story = {
  render: (args) => <Bag {...args} />,
};
