import { Meta, StoryObj } from '@storybook/react';
import AppleHalfAlt from '../apple-half-alt';

const meta: Meta<typeof AppleHalfAlt> = {
  title: 'Icons/Apple half alt',
  component: AppleHalfAlt,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppleHalfAlt>;

export const Base: Story = {
  render: (args) => <AppleHalfAlt {...args} />,
};
