import { Meta, StoryObj } from '@storybook/react';
import CleanWater from '../clean-water';

const meta: Meta<typeof CleanWater> = {
  title: 'Icons/Nature/Clean water',
  component: CleanWater,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CleanWater>;

export const Base: Story = {
  render: (args) => <CleanWater {...args} />,
};
