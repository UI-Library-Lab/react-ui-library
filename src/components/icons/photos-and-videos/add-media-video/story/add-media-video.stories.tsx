import { Meta, StoryObj } from '@storybook/react';
import AddMediaVideo from '../add-media-video';

const meta: Meta<typeof AddMediaVideo> = {
  title: 'Icons/Photos And Videos/Add media video',
  component: AddMediaVideo,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddMediaVideo>;

export const Base: Story = {
  render: (args) => <AddMediaVideo {...args} />,
};
