import { Meta, StoryObj } from '@storybook/react';
import AreaSearch from '../area-search';

const meta: Meta<typeof AreaSearch> = {
  title: 'Icons/Organization/Area search',
  component: AreaSearch,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AreaSearch>;

export const Base: Story = {
  render: (args) => <AreaSearch {...args} />,
};
