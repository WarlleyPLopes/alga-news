import { Meta, StoryObj } from "@storybook/react";
import Paragraph, { ParagraphProps } from "../app/components/Typography/Paragraph";

export default {
  title: "Typography/Paragraph",
  component: Paragraph,
} as Meta;

type Story = StoryObj<ParagraphProps>;

export const Default: Story = {
  args: {
    size: 'default',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
  }
}