import { Meta, StoryObj } from "@storybook/react";
import ValueDescriptor, { ValueDescriptorProps } from "../app/components/ValueDescriptor/ValueDescriptor";

export default {
  title: "Example/ValueDescriptor",
  component: ValueDescriptor,
} as Meta;

type Story = StoryObj<ValueDescriptorProps>;

export const Default: Story = {
  args: {
    description: 'Ganhos na semana',
    value: 560322.02
  }
}

export const DefaultCurrency: Story = {
  args: {
    description: 'Ganhos na semana',
    value: 560322.02,
    isCurrency: true,
    color: 'default'
  }
}

export const Primary: Story = {
  args: {
    description: 'Ganhos na semana',
    value: 560322.02,
    isCurrency: false,
    color: "primary"
  }
}

export const PrimaryCurrency: Story = {
  args: {
    description: 'Ganhos na semana',
    value: 560322.02,
    isCurrency: true,
    color: "primary"
  }
}
