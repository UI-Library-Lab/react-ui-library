import { Meta, StoryObj } from '@storybook/react';
import FourKDisplay from '../4k-display';

const meta: Meta<typeof FourKDisplay> = {
  title: 'Icons/Devices/4k display',
  component: FourKDisplay,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FourKDisplay>;

export const Base: Story = {
  render: (args) => <FourKDisplay {...args} />,
};
