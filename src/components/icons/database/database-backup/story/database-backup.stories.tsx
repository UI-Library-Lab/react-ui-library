import { Meta, StoryObj } from '@storybook/react';
import DatabaseBackup from '../database-backup';

const meta: Meta<typeof DatabaseBackup> = {
  title: 'Icons/Database/Database backup',
  component: DatabaseBackup,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatabaseBackup>;

export const Base: Story = {
  render: (args) => <DatabaseBackup {...args} />,
};
