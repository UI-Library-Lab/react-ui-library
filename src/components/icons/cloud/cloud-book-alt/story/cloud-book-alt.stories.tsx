import { Meta, StoryObj } from '@storybook/react';
import CloudBookAlt from '../cloud-book-alt';

const meta: Meta<typeof CloudBookAlt> = {
  title: 'Icons/Cloud/Cloud book alt',
  component: CloudBookAlt,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CloudBookAlt>;

export const Base: Story = {
  render: (args) => <CloudBookAlt {...args} />,
};
