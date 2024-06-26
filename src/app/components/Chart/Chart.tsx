import { Line } from 'react-chartjs-2';
import NoData from '../NoData/NoData';
import Heading from '../Typography/Heading';
import * as C from './Chart.styles';

const options: Chart.ChartOptions = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0
    }
  },
  legend: {
    display: true,
    position: 'bottom',
    align: 'center',
    labels: {
      usePointStyle: true
    }
  },
  scales: {
    xAxes: [
      {
        display: 'true',
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'cashflow',
      },
    ],
  },
};

export interface ChartProps {
  data: Chart.ChartData
  title: string
}

export default function Chart({ data, title }: ChartProps) {
  return <C.Wrapper style={{ width: '100%' }}>
    <div style={{ marginBottom: 16 }}>
      <Heading level={3}>
        {title}
      </Heading>
    </div>
    {
      data ?
        <Line
          type="line"
          width={600}
          height={139}
          data={data}
          options={options}
        />
        : <NoData
          height={139}
        />
    }
  </C.Wrapper>
}
