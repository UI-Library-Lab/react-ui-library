import { Meta, StoryObj } from '@storybook/react';
import HistoricShieldAlt from '../historic-shield-alt';

const meta: Meta<typeof HistoricShieldAlt> = {
  title: 'Icons/Historic shield alt',
  component: HistoricShieldAlt,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof HistoricShieldAlt>;

export const Base: Story = {
  render: (args) => <HistoricShieldAlt {...args} />,
};
