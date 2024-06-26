import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tag } from "react-tag-input";
import TagInput, { TagInputProps } from "../app/components/TagInput";

export default {
  title: "Example/TagInput",
  component: TagInput,
} as Meta;

type Story = StoryObj<TagInputProps>;

export const Default: Story = {
  args: {
    placeholder: 'Insira as tags deste post',
    tags: [{ id: '1', text: 'JavaScript' }],
  }
}

export const Various: Story = {
  args: {
    placeholder: 'Insira as tags deste post',
    tags: [{ id: '1', text: 'JavaScript' },
    { id: '2', text: 'C++' }],
  }
}

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([])


  return <TagInput
    placeholder="Insira as tags deste post"
    tags={tags}
    onAdd={tag => setTags([...tags, tag])}
    onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
  />
}