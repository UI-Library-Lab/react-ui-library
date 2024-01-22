import { Meta, StoryObj } from '@storybook/react';
import AlbumCarousel1 from '../album-carousel-1';

const meta: Meta<typeof AlbumCarousel1> = {
  title: 'Icons/Music/Album carousel 1',
  component: AlbumCarousel1,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlbumCarousel1>;

export const Base: Story = {
  render: (args) => <AlbumCarousel1 {...args} />,
};
