import { Meta, StoryObj } from '@storybook/react';
import Cloud from '../cloud';

const meta: Meta<typeof Cloud> = {
  title: 'Icons/Weather/Cloud',
  component: Cloud,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cloud>;

export const Base: Story = {
  render: (args) => <Cloud {...args} />,
};
