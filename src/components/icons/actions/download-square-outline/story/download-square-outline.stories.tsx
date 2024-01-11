import { Meta, StoryObj } from '@storybook/react';
import DownloadSquareOutline from '../download-square-outline';

const meta: Meta<typeof DownloadSquareOutline> = {
  title: 'Icons/Download square outline',
  component: DownloadSquareOutline,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DownloadSquareOutline>;

export const Base: Story = {
  render: (args) => <DownloadSquareOutline {...args} />,
};
