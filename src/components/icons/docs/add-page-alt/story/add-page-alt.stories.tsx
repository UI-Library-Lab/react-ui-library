import { Meta, StoryObj } from '@storybook/react';
import AddPageAlt from '../add-page-alt';

const meta: Meta<typeof AddPageAlt> = {
  title: 'Icons/Add page alt',
  component: AddPageAlt,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddPageAlt>;

export const Base: Story = {
  render: (args) => <AddPageAlt {...args} />,
};
