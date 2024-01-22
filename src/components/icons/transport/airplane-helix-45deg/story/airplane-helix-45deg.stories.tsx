import { Meta, StoryObj } from '@storybook/react';
import AirplaneHelix45Deg from '../airplane-helix-45deg';

const meta: Meta<typeof AirplaneHelix45Deg> = {
  title: 'Icons/Transport/Airplane helix 45deg',
  component: AirplaneHelix45Deg,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AirplaneHelix45Deg>;

export const Base: Story = {
  render: (args) => <AirplaneHelix45Deg {...args} />,
};
