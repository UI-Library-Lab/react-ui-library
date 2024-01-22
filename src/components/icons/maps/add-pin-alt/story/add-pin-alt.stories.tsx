import { Meta, StoryObj } from '@storybook/react';
import AddPinAlt from '../add-pin-alt';

const meta: Meta<typeof AddPinAlt> = {
  title: 'Icons/Maps/Add pin alt',
  component: AddPinAlt,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddPinAlt>;

export const Base: Story = {
  render: (args) => <AddPinAlt {...args} />,
};
