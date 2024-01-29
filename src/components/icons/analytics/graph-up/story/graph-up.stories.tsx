import { Meta, StoryObj } from '@storybook/react';
import GraphUp from '../graph-up';

const meta: Meta<typeof GraphUp> = {
  title: 'Icons/Analytics/Graph up',
  component: GraphUp,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof GraphUp>;

export const Base: Story = {
  render: (args) => <GraphUp {...args} />,
};
