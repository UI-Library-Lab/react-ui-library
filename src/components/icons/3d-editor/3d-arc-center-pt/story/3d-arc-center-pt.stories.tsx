import { Meta, StoryObj } from '@storybook/react';
import ArcCenterPt from '../3d-arc-center-pt';

const meta: Meta<typeof ArcCenterPt> = {
  title: 'Icons/Arc center pt',
  component: ArcCenterPt,
  parameters: {
    design: {
      type: 'figma',
      url: import.meta.env.STORYBOOK_FIGMA_URL,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArcCenterPt>;

export const Base: Story = {
  render: (args) => <ArcCenterPt {...args} />,
};
