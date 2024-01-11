import { Meta, StoryObj } from '@storybook/react';
import BrainElectricity from '../brain-electricity';

const meta: Meta<typeof BrainElectricity> = {
  title: 'Icons/Brain electricity',
  component: BrainElectricity,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BrainElectricity>;

export const Base: Story = {
  render: (args) => <BrainElectricity {...args} />,
};
