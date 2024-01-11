import { Meta, StoryObj } from '@storybook/react';
import Airplay from '../airplay';

const meta: Meta<typeof Airplay> = {
  title: 'Icons/Airplay',
  component: Airplay,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Airplay>;

export const Base: Story = {
  render: (args) => <Airplay {...args} />,
};
