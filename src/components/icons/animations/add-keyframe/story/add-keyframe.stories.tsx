import { Meta, StoryObj } from '@storybook/react';
import AddKeyframe from '../add-keyframe';

const meta: Meta<typeof AddKeyframe> = {
  title: 'Icons/Add keyframe',
  component: AddKeyframe,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddKeyframe>;

export const Base: Story = {
  render: (args) => <AddKeyframe {...args} />,
};
