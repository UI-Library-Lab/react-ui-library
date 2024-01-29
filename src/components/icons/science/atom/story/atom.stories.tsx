import { Meta, StoryObj } from '@storybook/react';
import Atom from '../atom';

const meta: Meta<typeof Atom> = {
  title: 'Icons/Science/Atom',
  component: Atom,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Atom>;

export const Base: Story = {
  render: (args) => <Atom {...args} />,
};
