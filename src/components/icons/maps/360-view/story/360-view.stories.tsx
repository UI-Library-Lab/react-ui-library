import { Meta, StoryObj } from '@storybook/react';
import View360 from '../360-view';

const meta: Meta<typeof View360> = {
  title: 'Icons/360 view',
  component: View360,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof View360>;

export const Base: Story = {
  render: (args) => <View360 {...args} />,
};
