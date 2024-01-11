import { Meta, StoryObj } from '@storybook/react';
import AlbumCarousel from '../album-carousel';

const meta: Meta<typeof AlbumCarousel> = {
  title: 'Icons/Album carousel',
  component: AlbumCarousel,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlbumCarousel>;

export const Base: Story = {
  render: (args) => <AlbumCarousel {...args} />,
};
