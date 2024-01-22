import { Meta, StoryObj } from '@storybook/react';
import AppleWallet from '../apple-wallet';

const meta: Meta<typeof AppleWallet> = {
  title: 'Icons/Finance/Apple wallet',
  component: AppleWallet,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppleWallet>;

export const Base: Story = {
  render: (args) => <AppleWallet {...args} />,
};
