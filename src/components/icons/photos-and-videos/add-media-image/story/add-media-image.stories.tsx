import { Meta, StoryObj } from '@storybook/react';
import AddMediaImage from '../add-media-image';

const meta: Meta<typeof AddMediaImage> = {
  title: 'Icons/Photos And Videos/Add media image',
  component: AddMediaImage,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddMediaImage>;

export const Base: Story = {
  render: (args) => <AddMediaImage {...args} />,
};
