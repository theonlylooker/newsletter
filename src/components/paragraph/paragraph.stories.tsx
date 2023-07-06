import { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from ".";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {
    children: "Join 60,000+ product managers receiving monthly updates on:",
  },
};
