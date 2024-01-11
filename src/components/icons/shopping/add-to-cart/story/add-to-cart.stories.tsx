import { Meta, StoryObj } from '@storybook/react';
import AddToCart from '../add-to-cart';

const meta: Meta<typeof AddToCart> = {
  title: 'Icons/Add to cart',
  component: AddToCart,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddToCart>;

export const Base: Story = {
  render: (args) => <AddToCart {...args} />,
};
