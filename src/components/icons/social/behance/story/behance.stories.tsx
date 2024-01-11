import { Meta, StoryObj } from '@storybook/react';
import Behance from '../behance';

const meta: Meta<typeof Behance> = {
  title: 'Icons/Behance',
  component: Behance,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Behance>;

export const Base: Story = {
  render: (args) => <Behance {...args} />,
};
