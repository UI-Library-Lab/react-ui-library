import { Meta, StoryObj } from '@storybook/react';
import AddDatabaseScript from '../add-database-script';

const meta: Meta<typeof AddDatabaseScript> = {
  title: 'Icons/Add database script',
  component: AddDatabaseScript,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddDatabaseScript>;

export const Base: Story = {
  render: (args) => <AddDatabaseScript {...args} />,
};
