import { Meta, StoryObj } from "@storybook/react";
import ErrorDisplay, { ErrorDisplayProps } from "../app/components/ErrorDisplay/ErrorDisplay";

export default {
  title: "Example/ErrorDisplay",
  component: ErrorDisplay,
} as Meta;

type Story = StoryObj<ErrorDisplayProps>;

export const Default: Story = {
  args: {}
}

export const CustomTitle: Story = {
  args: {
    title: 'Houve um erro'
  }
}

export const CustomMessage: Story = {
  args: {
    title: 'Houve um erro',
    message: 'Falha na comunicação com o servidor'
  }
}

export const Small: Story = {
  args: {
    title: 'Houve um erro',
    message: 'Falha na comunicação com o servidor',
    small: true
  }
}