import { Meta, StoryObj } from "@storybook/react";
import Info, { InfoProps } from "../components/Info/Info";

export default {
  title: "Example/Info",
  component: Info,
} as Meta;

type Story = StoryObj<InfoProps>;

export const Default: Story = {
  args: {
    title: 'Post não encontrado',
    description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.',
  }
}