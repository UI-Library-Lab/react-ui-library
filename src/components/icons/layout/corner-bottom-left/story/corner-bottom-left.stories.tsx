import { Meta, StoryObj } from '@storybook/react';
import CornerBottomLeft from '../corner-bottom-left';

const meta: Meta<typeof CornerBottomLeft> = {
  title: 'Icons/Corner bottom left',
  component: CornerBottomLeft,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CornerBottomLeft>;

export const Base: Story = {
  render: (args) => <CornerBottomLeft {...args} />,
};
