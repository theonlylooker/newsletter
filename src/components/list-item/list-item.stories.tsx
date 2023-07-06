import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from ".";

const meta: Meta<typeof ListItem> = {
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Primary: Story = {
  args: { children: "Product discovery and building what matters" },
};
