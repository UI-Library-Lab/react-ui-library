import { Meta, StoryObj } from '@storybook/react';
import AirConditioner from '../air-conditioner';

const meta: Meta<typeof AirConditioner> = {
  title: 'Icons/Home/Air conditioner',
  component: AirConditioner,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AirConditioner>;

export const Base: Story = {
  render: (args) => <AirConditioner {...args} />,
};
