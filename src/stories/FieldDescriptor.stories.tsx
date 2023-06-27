import { Meta, StoryObj } from "@storybook/react";
import FieldDescriptor, { FieldDescriptorProps } from "../components/FieldDescriptor/FieldDescriptor";

export default {
  title: "Example/FieldDescriptor",
  component: FieldDescriptor,
} as Meta;

type Story = StoryObj<FieldDescriptorProps>;

export const Default: Story = {
  args: {
    field: 'Data de nascimento',
    value: '26 de Dezembro de 1997 (22 anos)',
  }
}