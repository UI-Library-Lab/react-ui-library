import { Meta, StoryObj } from '@storybook/react';
import HistoricShield from '../historic-shield';

const meta: Meta<typeof HistoricShield> = {
  title: 'Icons/Historic shield',
  component: HistoricShield,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof HistoricShield>;

export const Base: Story = {
  render: (args) => <HistoricShield {...args} />,
};
