import { Meta, StoryObj } from "@storybook/react";
import WordPriceCounter, { WordPriceCounterProps } from "../components/WordPriceCounter";

export default {
  title: "Example/WordPriceCounter",
  component: WordPriceCounter,
} as Meta;

type Story = StoryObj<WordPriceCounterProps>;

export const Default: Story = {
  args: {
    pricePerWord: 0.25,
    wordsCount: 20
  }
}