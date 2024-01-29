import { Meta, StoryObj } from '@storybook/react';
import AddKeyframeAlt from '../add-keyframe-alt';

const meta: Meta<typeof AddKeyframeAlt> = {
  title: 'Icons/Animations/Add keyframe alt',
  component: AddKeyframeAlt,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddKeyframeAlt>;

export const Base: Story = {
  render: (args) => <AddKeyframeAlt {...args} />,
};
