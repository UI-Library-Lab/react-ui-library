import { Meta, StoryObj } from '@storybook/react';
import FingerprintCircledError from '../fingerprint-circled-error';

const meta: Meta<typeof FingerprintCircledError> = {
  title: 'Icons/Fingerprint circled error',
  component: FingerprintCircledError,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FingerprintCircledError>;

export const Base: Story = {
  render: (args) => <FingerprintCircledError {...args} />,
};
