import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "../app/components/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'resetar senha'
  }
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'resetar senha'
  }
}

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'resetar senha'
  }
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'resetar senha'
  }
}