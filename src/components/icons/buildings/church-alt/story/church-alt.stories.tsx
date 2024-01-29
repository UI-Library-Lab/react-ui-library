import { Meta, StoryObj } from '@storybook/react';
import ChurchAlt from '../church-alt';

const meta: Meta<typeof ChurchAlt> = {
  title: 'Icons/Buildings/Church alt',
  component: ChurchAlt,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChurchAlt>;

export const Base: Story = {
  render: (args) => <ChurchAlt {...args} />,
};
