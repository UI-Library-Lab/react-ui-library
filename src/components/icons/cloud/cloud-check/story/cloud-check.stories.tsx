import { Meta, StoryObj } from '@storybook/react';
import CloudCheck from '../cloud-check';

const meta: Meta<typeof CloudCheck> = {
  title: 'Icons/Cloud/Cloud check',
  component: CloudCheck,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CloudCheck>;

export const Base: Story = {
  render: (args) => <CloudCheck {...args} />,
};
