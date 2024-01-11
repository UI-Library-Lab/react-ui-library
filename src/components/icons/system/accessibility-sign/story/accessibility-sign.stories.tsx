import { Meta, StoryObj } from '@storybook/react';
import AccessibilitySign from '../accessibility-sign';

const meta: Meta<typeof AccessibilitySign> = {
  title: 'Icons/Accessibility sign',
  component: AccessibilitySign,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccessibilitySign>;

export const Base: Story = {
  render: (args) => <AccessibilitySign {...args} />,
};
