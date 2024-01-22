import { Meta, StoryObj } from '@storybook/react';
import AppleIMac2021Side from '../apple-imac-2021-side';

const meta: Meta<typeof AppleIMac2021Side> = {
  title: 'Icons/Devices/Apple imac 2021 side',
  component: AppleIMac2021Side,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppleIMac2021Side>;

export const Base: Story = {
  render: (args) => <AppleIMac2021Side {...args} />,
};
