import { Meta, StoryObj } from '@storybook/react';
import Building from '../building';

const meta: Meta<typeof Building> = {
  title: 'Icons/Buildings/Building',
  component: Building,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Building>;

export const Base: Story = {
  render: (args) => <Building {...args} />,
};
