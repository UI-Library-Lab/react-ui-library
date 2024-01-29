import { Meta, StoryObj } from '@storybook/react';
import ArcheryMatch from '../archery-match';

const meta: Meta<typeof ArcheryMatch> = {
  title: 'Icons/Gaming/Archery match',
  component: ArcheryMatch,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArcheryMatch>;

export const Base: Story = {
  render: (args) => <ArcheryMatch {...args} />,
};
