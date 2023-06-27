import { Meta, StoryObj } from "@storybook/react";
import MarkdownEditor, { MarkdownEditorProps } from "../components/MarkdownEditor/MarkdownEditor";

export default {
  title: "Example/MarkdownEditor",
  component: MarkdownEditor,
} as Meta;

type Story = StoryObj<MarkdownEditorProps>;

export const Default: Story = {
  args: {
  },
};