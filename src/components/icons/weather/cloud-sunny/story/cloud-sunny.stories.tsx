import { Meta, StoryObj } from '@storybook/react';
import CloudSunny from '../cloud-sunny';

const meta: Meta<typeof CloudSunny> = {
  title: 'Icons/Cloud sunny',
  component: CloudSunny,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CloudSunny>;

export const Base: Story = {
  render: (args) => <CloudSunny {...args} />,
};
