import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "../components/Input/Input";

export default {
  title: "Example/Input",
  component: Input,
} as Meta;

type Story = StoryObj<InputProps>;

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'e.g: Jon Doe',
  },
};

export const WithLabelAndPlaceholder: Story = {
  args: {
    label: "Name",
    placeholder: 'e.g: Jon Doe'
  },
};

export const WithLabelAndContent: Story = {
  args: {
    label: "Name",
    placeholder: 'e.g: Jon Doe',
    value: 'Jon Doe',
  },
};

export const WithContent: Story = {
  args: {
    value: 'Jon Doe',
  },
};