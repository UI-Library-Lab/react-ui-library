import { Meta, StoryObj } from '@storybook/react';
import AngleTool from '../angle-tool';

const meta: Meta<typeof AngleTool> = {
  title: 'Icons/Angle tool',
  component: AngleTool,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AngleTool>;

export const Base: Story = {
  render: (args) => <AngleTool {...args} />,
};
