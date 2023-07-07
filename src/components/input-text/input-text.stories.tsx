import { Meta, StoryObj } from "@storybook/react";

import { InputText } from ".";

const meta: Meta<typeof InputText> = {
  component: InputText,
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const BaseInput: Story = {
  args: { children: "Email address", id: "email" },
};
