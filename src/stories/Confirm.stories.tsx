import { Meta, StoryObj } from "@storybook/react";
import Confirm, { ConfirmProps } from "../components/Confirm/Confirm";

export default {
  title: "Example/Confirm",
  component: Confirm,
} as Meta;

type Story = StoryObj<ConfirmProps>;

export const Default: Story = {
  args: {
    titles: 'Você tem certeza?'
  }
}