import { Meta, StoryObj } from "@storybook/react";
import Heading, { HeadingProps } from "../app/components/Typography/Heading";

export default {
  title: "Typography/Heading",
  component: Heading,
} as Meta;

type Story = StoryObj<HeadingProps>;

export const Heading1: Story = {
  args: {
    level: 1,
    children: 'Heading 1'
  }
}

export const Heading2: Story = {
  args: {
    level: 2,
    children: 'Heading 2'

  }
}

export const Heading3: Story = {
  args: {
    level: 3,
    children: 'Heading 3'

  }
}