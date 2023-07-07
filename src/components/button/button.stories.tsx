import { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BaseButton: Story = {
  args: {
    children: "Subscribe to monthly newsletter",
  },
};

export const LargeButton: Story = {
  args: {
    children: "Subscribe to monthly newsletter",
    size: "large",
  },
};
