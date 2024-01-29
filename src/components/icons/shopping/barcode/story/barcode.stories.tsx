import { Meta, StoryObj } from '@storybook/react';
import Barcode from '../barcode';

const meta: Meta<typeof Barcode> = {
  title: 'Icons/Shopping/Barcode',
  component: Barcode,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Barcode>;

export const Base: Story = {
  render: (args) => <Barcode {...args} />,
};
