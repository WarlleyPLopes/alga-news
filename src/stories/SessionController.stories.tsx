import { Meta, StoryObj } from "@storybook/react";
import SessionController, { SessionControllerProps } from "../components/SessionController/SessionController";

export default {
  title: "Example/SessionController",
  component: SessionController,
} as Meta;

type Story = StoryObj<SessionControllerProps>;

export const Default: Story = {
  args: {
    name: 'Random Randola',
    description: 'tempo'
  }
}