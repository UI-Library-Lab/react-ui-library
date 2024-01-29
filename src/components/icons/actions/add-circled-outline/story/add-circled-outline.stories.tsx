import { Meta, StoryObj } from '@storybook/react';
import AddCircledOutline from '../add-circled-outline';

const meta: Meta<typeof AddCircledOutline> = {
  title: 'Icons/Actions/Add circled outline',
  component: AddCircledOutline,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddCircledOutline>;

export const Base: Story = {
  render: (args) => <AddCircledOutline {...args} />,
};
