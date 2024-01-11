import { Meta, StoryObj } from '@storybook/react';
import AccessibilityTech from '../accessibility-tech';

const meta: Meta<typeof AccessibilityTech> = {
  title: 'Icons/Accessibility tech',
  component: AccessibilityTech,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccessibilityTech>;

export const Base: Story = {
  render: (args) => <AccessibilityTech {...args} />,
};
