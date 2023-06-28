import { Meta, StoryObj } from "@storybook/react";
import MarkdownEditor, { MarkdownEditorProps } from "../app/components/MarkdownEditor/MarkdownEditor";

export default {
  title: "Example/MarkdownEditor",
  component: MarkdownEditor,
} as Meta;

type Story = StoryObj<MarkdownEditorProps>;

export const Default: Story = {
  args: {
  },
};