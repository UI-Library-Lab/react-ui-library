import { Meta, StoryObj } from '@storybook/react';
import AntennaOff from '../antenna-off';

const meta: Meta<typeof AntennaOff> = {
  title: 'Icons/Connectivity/Antenna off',
  component: AntennaOff,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AntennaOff>;

export const Base: Story = {
  render: (args) => <AntennaOff {...args} />,
};
