import { Meta, StoryObj } from '@storybook/react';
import Female from '../female';

const meta: Meta<typeof Female> = {
  title: 'Icons/Female',
  component: Female,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Female>;

export const Base: Story = {
  render: (args) => <Female {...args} />,
};
