import { Meta, StoryObj } from '@storybook/react';
import AddUser from '../add-user';

const meta: Meta<typeof AddUser> = {
  title: 'Icons/Add user',
  component: AddUser,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddUser>;

export const Base: Story = {
  render: (args) => <AddUser {...args} />,
};
