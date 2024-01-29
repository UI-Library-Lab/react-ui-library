import { Meta, StoryObj } from '@storybook/react';
import GraphDown from '../graph-down';

const meta: Meta<typeof GraphDown> = {
  title: 'Icons/Analytics/Graph down',
  component: GraphDown,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof GraphDown>;

export const Base: Story = {
  render: (args) => <GraphDown {...args} />,
};
