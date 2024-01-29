import { Meta, StoryObj } from '@storybook/react';
import BookmarkCircled from '../bookmark-circled';

const meta: Meta<typeof BookmarkCircled> = {
  title: 'Icons/Organization/Bookmark circled',
  component: BookmarkCircled,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BookmarkCircled>;

export const Base: Story = {
  render: (args) => <BookmarkCircled {...args} />,
};
