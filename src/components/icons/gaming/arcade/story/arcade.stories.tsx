import { Meta, StoryObj } from '@storybook/react';
import Arcade from '../arcade';

const meta: Meta<typeof Arcade> = {
  title: 'Icons/Gaming/Arcade',
  component: Arcade,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Arcade>;

export const Base: Story = {
  render: (args) => <Arcade {...args} />,
};
