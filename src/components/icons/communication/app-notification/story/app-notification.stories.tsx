import { Meta, StoryObj } from '@storybook/react';
import AppNotification from '../app-notification';

const meta: Meta<typeof AppNotification> = {
  title: 'Icons/Communication/App notification',
  component: AppNotification,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppNotification>;

export const Base: Story = {
  render: (args) => <AppNotification {...args} />,
};
