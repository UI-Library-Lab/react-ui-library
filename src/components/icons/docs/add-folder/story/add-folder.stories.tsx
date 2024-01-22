import { Meta, StoryObj } from '@storybook/react';
import AddFolder from '../add-folder';

const meta: Meta<typeof AddFolder> = {
  title: 'Icons/Docs/Add folder',
  component: AddFolder,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddFolder>;

export const Base: Story = {
  render: (args) => <AddFolder {...args} />,
};
