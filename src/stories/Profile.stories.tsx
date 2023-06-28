import { Meta, StoryObj } from "@storybook/react";
import Profile, { ProfileProps } from "../app/components/Profile";

export default {
  title: "Example/Profile",
  component: Profile,
} as Meta;

type Story = StoryObj<ProfileProps>;

export const Default: Story = {
  args: {
    name: 'Warlley Lopes',
    description: 'Developer Front-end'
  }
}