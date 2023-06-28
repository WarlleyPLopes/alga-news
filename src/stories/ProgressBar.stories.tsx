import { Meta, StoryObj } from "@storybook/react";
import ProgressBar, { ProgressBarProps } from "../app/components/ProgressBar/ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
} as Meta;

type Story = StoryObj<ProgressBarProps>;

export const Primary: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 50,
    theme: 'primary',
    width: 375
  }
}

export const Secondary: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 50,
    theme: 'secondary',
    width: 375
  }
}

export const Complete: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 100,
    theme: 'primary',
    width: 375
  }
}

export const ZeroProgress: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 0,
    theme: 'secondary',
    width: 375
  }
}

export const ProgressInHalfOfText: Story = {
  args: {
    title: 'Você tem certeza?',
    progress: 0,
    theme: 'secondary',
    width: 375
  }
}