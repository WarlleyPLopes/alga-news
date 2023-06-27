import { Meta, StoryObj } from "@storybook/react";
import Chart, { ChartProps } from "../components/Chart/Chart";

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Desempenho pessoal',
      data: [500, 400, 600, 100, 800, 20],
      fill: true,
      backgroundColor: '#0099FF',
      borderColor: '#0099FF',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
    {
      label: 'Média de desempenho do time',
      data: [100, 200, 250, 500, 1000, 600],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};

export default {
  title: "Example/Chart",
  component: Chart,
} as Meta;

type Story = StoryObj<ChartProps>;

export const Default: Story = {
  args: {
    title: 'Média de performance nos últimos 12 meses',
    data
  }
}

export const WithOutData: Story = {
  args: {
    title: 'Média de performance nos últimos 12 meses',
  }
}

