import { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const BaseHeader: Story = {
  args: {
    children: "Stay Updated!",
  },
};
export const LargeHeader: Story = {
  args: {
    children: "Stay Updated!",
    size: "lg",
  },
};
