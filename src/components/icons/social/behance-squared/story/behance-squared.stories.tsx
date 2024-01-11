import { Meta, StoryObj } from '@storybook/react';
import BehanceSquared from '../behance-squared';

const meta: Meta<typeof BehanceSquared> = {
  title: 'Icons/Behance squared',
  component: BehanceSquared,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BehanceSquared>;

export const Base: Story = {
  render: (args) => <BehanceSquared {...args} />,
};
