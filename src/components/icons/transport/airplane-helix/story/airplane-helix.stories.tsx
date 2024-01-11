import { Meta, StoryObj } from '@storybook/react';
import AirplaneHelix from '../airplane-helix';

const meta: Meta<typeof AirplaneHelix> = {
  title: 'Icons/Airplane helix',
  component: AirplaneHelix,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AirplaneHelix>;

export const Base: Story = {
  render: (args) => <AirplaneHelix {...args} />,
};
