import { Meta, StoryObj } from "@storybook/react";
import NoData, { NoDataProps } from "../app/components/NoData/NoData";

export default {
  title: "Example/NoData",
  component: NoData,
} as Meta;

type Story = StoryObj<NoDataProps>;

export const Default: Story = {
  args: {}
}

export const FixedHeight: Story = {
  args: {
    height: 240
  }
}