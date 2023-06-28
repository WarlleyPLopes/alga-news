import { Meta, StoryObj } from "@storybook/react";
import ImageUpload, { ImageUploadProps } from "../app/components/ImageUpload";

export default {
  title: "Example/ImageUpload",
  component: ImageUpload,
} as Meta;

type Story = StoryObj<ImageUploadProps>;

export const Default: Story = {
  args: {
    label: 'Thumbnail do post'
  }
}

