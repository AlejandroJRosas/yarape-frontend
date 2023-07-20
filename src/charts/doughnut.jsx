import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { backgroundColor, borderColor } from './colorConstants'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ data, label }) => {
  const chartData = {
    labels: data?.items?.map((item) => item.x + ': ' + item.y),
    datasets: [
      {
        label,
        data: data?.items?.map((item) => item.y),
        backgroundColor,
        borderColor,
        borderWidth: 1
      }
    ]
  }

  const options = {
    maintainAspectRatio: true,
    scales: {},
    legend: {
      labels: {
        fontSize: 25
      }
    }
  }

  return (
    <div>
      <Doughnut data={chartData} options={options} />
    </div>
  )
}

export default DoughnutChart
