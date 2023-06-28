import { Meta, StoryObj } from "@storybook/react";
import CircleChart, { CircleChartProps } from "../app/components/CircleChart";

export default {
  title: "Example/CircleChart",
  component: CircleChart,
  argTypes: {
    process: {
      control: {
        type: 'range',
        min: 0,
        max: 100
      }
    }
  }
} as Meta;

type Story = StoryObj<CircleChartProps>;

export const Default: Story = {
  args: {
    size: 150,
    progress: 80,
    caption: 'web'
  }
}