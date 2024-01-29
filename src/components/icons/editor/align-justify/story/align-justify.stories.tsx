import { Meta, StoryObj } from '@storybook/react';
import AlignJustify from '../align-justify';

const meta: Meta<typeof AlignJustify> = {
  title: 'Icons/Editor/Align justify',
  component: AlignJustify,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlignJustify>;

export const Base: Story = {
  render: (args) => <AlignJustify {...args} />,
};
