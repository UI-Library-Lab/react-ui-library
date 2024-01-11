import { Meta, StoryObj } from '@storybook/react';
import EmojiBlinkLeft from '../emoji-blink-left';

const meta: Meta<typeof EmojiBlinkLeft> = {
  title: 'Icons/Emoji blink left',
  component: EmojiBlinkLeft,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmojiBlinkLeft>;

export const Base: Story = {
  render: (args) => <EmojiBlinkLeft {...args} />,
};
